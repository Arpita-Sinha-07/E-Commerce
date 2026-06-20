import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
        setCategory(prev=> prev.filter(item => item !== e.target.value))
      }
    else{
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory) );
    }

    setFilterProducts(productsCopy)
  }


  const sortProduct = () => {
    let filterproductCopy = filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFilterProducts(filterproductCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(filterproductCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t text-gray-300'>
      {/* Filter Options */}
      <div className='min-w-60 text-gray-700'>
        <p onClick = {() => setShowFilter(!showFilter)} className='my-2 sm:text-xl flex items-center cursor-pointer gap-2'> FILTERS 
          <img className={`h-3 sm:hidden ${showFilter ?'rotate-90' : ''} `} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>
              Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>
              Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>
              Kids
            </p>

          </div>
          

        </div>
      {/* subCategory filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>
              Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>
              Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>
              Winterwear
            </p>
          </div>
        </div> 
      </div>


      {/* Right Side */}
      <div className='flex-1'>
      <div className='sm:text-3xl text-base flex justify-between mb-4'>
          <Title text1={'ALL'} text2={' COLLECTIONS'}/> 
          {/* Product Sort */}
          <select onChange = {(e) => setSortType(e.target.value)} className='text-gray-700 boder-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort By : Relevant</option>
            <option value="low-high">Sort By : Low to High</option>
            <option value="high-low">Sort By : High to Low</option>
          </select>
      </div>

      {/* Map Products */}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
    </div>
    

  )
}


export default Collection