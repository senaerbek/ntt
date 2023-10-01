import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products/productSlice';
import cartSlice from './cart/cartSlice';
import favoriteSlice from './favorite/favoriteSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    cartList: cartSlice,
    favoriteList: favoriteSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
