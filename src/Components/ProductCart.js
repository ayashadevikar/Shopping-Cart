import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/cartSlice"

const ProductCart = () => {

  const product = useSelector(state => state.cart);

  const dispatch = useDispatch(); 

const removeToCart = (id) => {
    dispatch(remove(id));
}


    return (
        <div className="productData md:grid grid-cols-4 justify-items-center gap-6 p-4 ">
        {
          product.map((products) => (
           <div key={products.id} className="productList border-2 solid rounded-md flex flex-col justify-center items-center gap-y-4 p-4">
              <img className="product-img h-[10rem]" src={products.image} alt="" />
              <h1 className="font-xs w-[15rem] font-bold">{products.title}</h1>
              <span className="product-price ">{products.price}</span>
              <hr className="border-1 w-72"></hr>
              <button onClick={() => removeToCart(products.id)} className="bg-red-600 text-white rounded-sm p-2">Remove Item</button>
            </div>
           ))
        
  }
           
          </div>
    )
}

export default ProductCart;