import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/itemsSlice';
import categoryReducer from '../features/categorySlice';
import addItemReducer from '../features/addItemSlice';
import deleteItemReducer from '../features/deleteItemSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoryReducer,
    addItem: addItemReducer,
    deleteItem: deleteItemReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch