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

export const postCategory = createAsyncThunk(
  "category/post",
  async ({ text }, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const res = await fetch(`http://localhost:4000/category`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name: text }),
      })
      return await res.json()
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const removeCategory = createAsyncThunk(
  "category/remove",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      await fetch(`http://localhost:4000/category/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      })
      return id
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload
      })

      .addCase(postCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload)
        state.loading = false
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((cat) => {
          return cat._id !== action.payload
        })
      })
  },
})

export default categorySlice.reducer
