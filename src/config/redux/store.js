import { configureStore } from '@reduxjs/toolkit';

import userReducer from "./features/user/userSlice";
import cartReducer from './features/cart/cartSlice';
import authReducer from './features/auth/authSlice';
import productsReducer from "./features/products/productsSlice";

const store = configureStore({
          reducer: {
                    user: userReducer,
                    cart: cartReducer,
                    auth: authReducer,
                    products: productsReducer
          }
});

export default store;

