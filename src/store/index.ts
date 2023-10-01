import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products/productSlice';
import cartSlice from './cart/cartSlice';
import favoriteSlice from './favorite/favoriteSlice';
import navigateSlice from './navigate/navigateSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    cartList: cartSlice,
    favoriteList: favoriteSlice,
    navigate: navigateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
