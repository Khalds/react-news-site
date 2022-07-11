import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import newsSlice from "../features/news/newsSlice"


export const store = configureStore({
  reducer: {
    auth: authSlice,
    news: newsSlice,
  },
})
