import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../index';

export const getProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${baseUrl}/products`);
  return await response.json();
});
