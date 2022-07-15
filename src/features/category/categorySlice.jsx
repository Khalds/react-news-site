import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: [],
  error: null,
  loading: null,
}

export const fetchCategory = createAsyncThunk(
  "category/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/category")

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

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  },
})

export default categorySlice.reducer
