import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import userReducer from "./features/user/userSlice";
import cartReducer from './features/cart/cartSlice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
          reducer: {
                    user: userReducer,
                    cart: cartReducer,
                    auth: authReducer
          }
});

export default store;

