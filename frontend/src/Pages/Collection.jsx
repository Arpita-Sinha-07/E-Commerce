import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Collection = () => {

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t text-gray-300'>
      {/* Filter Options */}
      <div className='min-w-60 text-gray-700'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'> FILTERS 
          <img className={`h-3`} src={assets.dropdown_icon} alt="" />
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

      <div className='text-3xl text-center flex flex-col'>
          <Title text1={'ALL'} text2={' COLLECTIONS'}/>
        </div>
      
    </div>
  )
}

export default Collection