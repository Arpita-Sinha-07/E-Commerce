import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Product = () => {

const { productId} = useParams();
const {products} = useContext(ShopContext);
const [productData, setProductData] = useState(false);
const [image, setImage] = useState('')

const fetchProductData = async () => {
  products.map((item)=>{
    if(item._id === productId){
      setProductData(item)
      setImage(item.image[0])
      return null;
    }
  })
}

useEffect(()=>{
  fetchProductData();

}, [productId])
  


return productData? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
      </div>      
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
