import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../models/CartItem';

const cartSlice = createSlice({
    name: 'products',
    initialState: {
      cartList: [] as CartItem[],
    },
    reducers: {
      addToCart: (state, action) => {
        const product = state.cartList.find((product) => product.id === action.payload.id);
        if (!product) {
          state.cartList.push({ ...action.payload, quantity: 1 });
        } else {
          product.quantity += 1;
        }
      },
      removeFromCart: (state, action) => {
        const product = state.cartList.find((product) => product.id === action.payload.id);
        if (product && product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cartList = state.cartList.filter((product) => product.id !== action.payload.id);
        }
      },
    },
  },
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
