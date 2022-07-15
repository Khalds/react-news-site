import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import newsSlice from "../features/news/newsSlice"
import commentsSlice from "../features/comments/commentsSlice"
import categorySlice from "../features/category/categorySlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    news: newsSlice,
    coms: commentsSlice,
    cat: categorySlice,
  },
})
