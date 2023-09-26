import { createSlice } from '@reduxjs/toolkit';
import { FavoriteItem } from '../../models/FavoriteItem';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteList: [] as FavoriteItem[],
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
