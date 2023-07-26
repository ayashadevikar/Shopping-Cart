
import { useState, useEffect } from "react";

const Product = () =>{

  const [product, getProduct] = useState([]);

  useEffect(() =>{
          fetch('https://fakestoreapi.com/products')
          .then(data => data.json())
          .then(result => getProduct(result))
  }, []);

    return(
        <>
          <h1>Product Dashboard</h1>
          {JSON.stringify(product)}
        </>
    )

}

export default Product;

