import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice";
import cartSlice from './features/cart/cartSlice';
import authSlice from './features/auth/authSlice';

const store = configureStore({
          reducer: {
                    user: userReducer,
                    cart: cartSlice,
                    auth: authSlice
          }
});

export default store;

