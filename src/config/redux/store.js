import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';

import userReducer from "./features/user/userSlice";
import cartReducer from './features/cart/cartSlice';
import authReducer from './features/auth/authSlice';
import productsReducer from "./features/products/productsSlice";

const persistConfig = {
          key: 'user',
          storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
          reducer: {
                    user: persistedUserReducer,
                    cart: cartReducer,
                    auth: authReducer,
                    products: productsReducer
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                              serializableCheck: {
                                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                              },
                    })
});

export const persistor = persistStore(store);

// export default { store, persistor };
