import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},           // pas d'email ni password à l'init
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { email: action.payload.email }; // uniquement email
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
