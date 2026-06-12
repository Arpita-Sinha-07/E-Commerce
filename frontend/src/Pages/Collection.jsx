import { useContext, useState, useEffects } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffects(()=>{
    setFilterProducts(products);
  },[])

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
              <input className='w-3' type="checkbox" value={'Men'}/>
              Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'}/>
              Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'}/>
              Kids
            </p>

          </div>
          

        </div>

        {/* Type filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'}/>
              Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'}/>
              Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'}/>
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
          <select className='boder-2 border-gray-300 text-sm px-2'>
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
      // collections.........
    </div>
    </div>

  )
}

export default Collection