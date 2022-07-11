import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  news: [
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x16.jpg.pagespeed.ic._cog5EESqN.webp",
      title: " Financial news: A new company is born today at the stock market",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
  ],
  category: [ "khalid" ],
  error: null,
}

export const fetchNews = createAsyncThunk("news/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/news`)

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

export const fetchCategory = createAsyncThunk(
  "news/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/news`)

      const json = await res.json()

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      } else {
        return thunkAPI.fulfillWithValue(json)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

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
