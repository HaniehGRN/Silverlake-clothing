<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
=======
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
>>>>>>> 4843a7dae4a05d5068f853dadeb1be65786a1c83

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

