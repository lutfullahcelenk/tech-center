import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from '../features/itemsSlice'
import categoryReducer from '../features/categorySlice'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch