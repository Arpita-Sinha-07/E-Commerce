import {useContext, useState, useEffect} from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title';
const BestSeller = () => {

    const {products} = useContext(ShopContext)  
    const [bestSeller, setBestSeller] = useState([])
    
    useEffect(()=>{
        const bestProducts = products.filter((items)=>(items.bestseller));
        setBestSeller(bestProducts.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, eius corporis! Reprehenderit incidunt nam expedita quo, quibusdam minus velit tenetur.
            </p>

        </div>      
    </div>
  )
}

export default BestSeller
