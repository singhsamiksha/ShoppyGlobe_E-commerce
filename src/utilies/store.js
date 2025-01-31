/* src/store/store.js */
import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from './cartReducer';

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
