import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';
import { getProducts } from '../../api/product/product-service';

const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [] as Product[],
      loading: false,
    },
    reducers: {},
    extraReducers: builder => {
      builder.addCase(getProducts.pending, state => {
        state.loading = true;
      });
      builder.addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      });
      builder.addCase(getProducts.rejected, state => {
        state.loading = false;
      });
    },
  },
);

export default productSlice.reducer;
