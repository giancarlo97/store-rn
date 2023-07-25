import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products/products.slice';
import cartReducer from './cart/cart.slice';
import categoriesReducer from './categories/categories.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});