import React from 'react'
import { Link } from "react-router-dom"; 
import { useSelector } from 'react-redux';

const Navbar = () => {
 
     const cartProducts = useSelector(state => state.cart);

  return (
    <>
      
     {/* mobile view navbar */}
        <div className='md:hidden nav-items p-8'>

           <ul className='flex justify-between'>

             <h1 className='font-bold'>Shopping Cart</h1>
  
             <Link to="/">Products</Link>
 
             <Link to="/cart">My Bag 0{cartProducts.length}</Link> 

          </ul>

       </div>


      {/* desktop view navbar */}
       <div className='hidden md:block nav-items p-8'>

            <ul className='flex gap-x-4 items-center'>
            
                 <h1 className='font-bold text-2xl'>Shopping Cart</h1>
              
                 <Link to="/" className='text-2xl'>Products</Link>
             
                 <Link to="/cart" className='ml-auto text-xl'>My Bag 0{cartProducts.length}</Link> 
            
            </ul>

       </div>
    </>
  )
}

export default Navbar
