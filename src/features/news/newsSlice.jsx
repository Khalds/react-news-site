import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  news: [],
  error: null,
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: (builder) => {},
})
