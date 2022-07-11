import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  news: [],
  error: null,
}

export const fetchNews = createAsyncThunk("news/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3001/news`)

    const json = await res.json()

    if (json.error) {
      return thunkAPI.rejectWithValue(json.error)
    } else {
      return thunkAPI.fulfillWithValue(json)
    }
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
})

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload
    })
  },
})

export default newsSlice.reducer
