import React from 'react'
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <>
       <div className='nav-items p-8'>
            <ul className='flex justify-evenly'>
               <Link to="/">
                  <li>Home</li>
                </Link>
                <li>Login</li>
                <li>Sign Up</li>
                <Link to="/">
                  <li>Cart</li>
                </Link>
            </ul>
       </div>
    </>
  )
}

export default Navbar
