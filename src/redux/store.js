import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import productReducer from "../redux/ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
