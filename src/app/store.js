import { configureStore } from "@reduxjs/toolkit"
import { newsSlice } from "../features/News/newsSlice"

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
})

export default newsSlice.reducer
