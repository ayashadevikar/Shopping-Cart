
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {add} from '../features/productcartSlice';


const Product = () =>{

  const dispatch = useDispatch();


 const [product, setProducts] = useState([]);

  useEffect(() =>{

    
          fetch('https://fakestoreapi.com/products')
          .then(data => data.json())
          .then(result => setProducts(result))
  }, []);

  const addToCart = (products) => {
       dispatch(add(products))
  }
        
return(
      <div className="productData md:grid grid-cols-4 justify-items-center gap-6 p-8">
      {
        product.map((products) => (
         <div key={products.id} className="productList border-2 solid rounded-md flex flex-col justify-center items-center gap-y-4 p-4">
            <img className="product-img h-[15vh] w-auto" src={products.image} alt=""/>
            <h1 className="font-xs w-[15rem] font-bold text-center">{products.title}</h1>
            <span className="product-price font-bold">INR:{products.price}</span>
            <hr className="border-1 w-[15vw]"></hr>
            <button onClick={()=>addToCart(products)} className="bg-blue-600 text-white rounded-sm p-2">Add to Cart</button>
          </div>
         ))
      
}
         
        </div>
       
    )  
  
}


export default Product;

