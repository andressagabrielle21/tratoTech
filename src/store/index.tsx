import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';
import cartSlice from './reducers/cart';
import searchSlice from './reducers/search';

//Tiny slices of the store. Where the reducers are at
const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    cart: cartSlice,
    search: searchSlice,
  }
});

// Necessary for Redux use on TS
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;