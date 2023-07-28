
import { useState, useEffect } from "react";

const Product = () =>{

  const [product, getProduct] = useState([]);

  useEffect(() =>{
          fetch('https://fakestoreapi.com/products')
          .then(data => data.json())
          .then(result => getProduct(result))
  }, []);

  
        
return(
      <div className="productData grid grid-cols-4 justify-items-center gap-6 p-4 ">
      {
        product.map((products) => (
         <div key={products.id} className="productList border-2 solid rounded-md flex flex-col justify-center items-center gap-y-4">
            <img className="product-img h-[10rem]" src={products.image} alt="" />
            <h1 className="font-xs w-[15rem] font-bold">{products.title}</h1>
            <span className="product-price ">{products.price}</span>
            <hr className="border-1 w-72"></hr>
            <button className="bg-blue-600 text-white rounded-sm p-2">Add to Cart</button>
          </div>
         ))
      
}
         
        </div>
       
    )  
  
}


export default Product;

