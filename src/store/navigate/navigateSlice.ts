import { createSlice } from '@reduxjs/toolkit';

const navigateSlice = createSlice({
  name: 'auth',
  initialState: {
    switchNavigationRoute: 'Splash',
  },
  reducers: {
    setSignIn: (state, action) => {
      state.switchNavigationRoute = action.payload.switchNavigationRoute;
    },
    setSignOut: (state) => {
      state.switchNavigationRoute = 'Auth';
    },
  },
});

export const { setSignIn, setSignOut } = navigateSlice.actions;
export default navigateSlice.reducer;
