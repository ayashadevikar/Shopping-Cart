
import { useState, useEffect } from "react";

const Product = () =>{

  const [product, getProduct] = useState([]);

  useEffect(() =>{
          fetch('https://fakestoreapi.com/products')
          .then(data => data.json())
          .then(result => getProduct(result))
  }, []);

  
        
return(
      <div className="productData grid grid-cols-4 justify-items-center gap-6 p-4">
      {
        product.map((products) => (
         <div key={products.id} className="productList">
            <img className="product-img h-[10rem]" src={products.image} alt="" />
            <h1 className="font-xs w-[17rem]">{products.title}</h1>
          </div>
         ))
      
}
         
        </div>
       
    )  
  
}


export default Product;

