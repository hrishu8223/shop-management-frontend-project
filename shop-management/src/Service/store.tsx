
import { configureStore } from '@reduxjs/toolkit'
import {apislice} from './apislice'



export const store = configureStore({
  reducer: {
    [apislice.reducerPath]: apislice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apislice.middleware),
})
