import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from '../features/itemsSlice'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch