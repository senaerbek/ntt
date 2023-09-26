import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteList: [] as Product[],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const product = state.favoriteList.find((product) => product.id === action.payload.id);
      if (!product) {
        state.favoriteList.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
