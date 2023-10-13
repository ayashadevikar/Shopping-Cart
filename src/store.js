import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productcartSlice";



const store = configureStore({
    reducer: {
        cart: productReducer,
     
    }
})

export default store;