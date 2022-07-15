import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  comments: [],
  error: null,
  loading: null,
}

export const fetchCommentsById = createAsyncThunk(
  "comments/fetch",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/comments/${id}`)

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

export const postComment = createAsyncThunk(
  "comments/post",
  async ({ text, userId, id }, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const res = await fetch(`http://localhost:4000/comments/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ text: text, user: userId, news: id }),
      })
      return await res.json()
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsById.fulfilled, (state, action) => {
        state.comments = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchCommentsById.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchCommentsById.rejected, (state, action) => {
        state.error = "При запросе на сервер произошла ошибка"
        state.loading = false
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload)
        state.loading = false
      })
      .addCase(postComment.pending, (state, action) => {
        state.loading = true
      })
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default commentsSlice.reducer
