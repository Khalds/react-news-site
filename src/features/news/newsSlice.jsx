import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  news: [],
  error: null,
  loading: null,
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

// export const postNews = createAsyncThunk(
//   "news/post",
//   async (text, thunkAPI) => {
//     const state = thunkAPI.getState()

//     try {
//       const res = await fetch("http://localhost:4000/news/post", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${state.auth.token}`,
//           "Content-Type": "auth/json",
//         },

//         body: JSON.stringify({ text }),
//       })
//       return await res.json()
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e)
//     }
//   }
// )

// export const removeNews = createAsyncThunk(
//   "news/remove",
//   async (id, thunkAPI) => {
//     const state = thunkAPI.getState
//     try {
//       await fetch(`http://localhost:4000/news/post/:${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${state.auth.token}`,
//         },
//       })
//       return id
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e)
//     }
//   }
// )

export const addLike = createAsyncThunk(
  "news/patch",
  async ({ id, userId }, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const res = await fetch(`http://localhost:4000/news/${id}/like`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          like: userId,
        }),
      })
      console.log(id, userId)
      return res.json(res)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

// export const disLike = createAsyncThunk(
//   "news/patch",
//   async ({ id, userId }, thunkAPI) => {
//     const state = thunkAPI.getState()
//     try {
//       const res = await fetch(`http://localhost:4000/news/${id}/dislike`, {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${state.auth.token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           like: userId,
//         }),
//       })
//       return res.json(res)
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message)
//     }
//   }
// )

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.error = "При запросе на сервер произошла ошибка"
        state.loading = false
      })
      .addCase(fetchNews.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.news = state.news.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload
          }
          return item
        })
      })
    // .addCase(disLike.fulfilled, (state, action) => {
    //   state.news = state.news.map((item) => {
    //     if (item._id === action.payload._id) {
    //       return action.payload
    //     }
    //     return item
    //   })
    // })
  },
})

export default newsSlice.reducer
