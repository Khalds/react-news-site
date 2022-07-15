import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  signIn: false,
  signUp: false,
  error: null,
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  login: localStorage.getItem("login"),
}

export const fetchUser = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/users")

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
export const createUser = createAsyncThunk(
  "user/post",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      })

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

export const auth = createAsyncThunk(
  "user/login",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      })
      const json = await res.json()

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error)
      } else {
        localStorage.setItem("token", json.token)
        localStorage.setItem("userId", json.userId)
        localStorage.setItem("login", json.login)

        return thunkAPI.fulfillWithValue(json)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)
export const removeToken = createAsyncThunk("remove", () => {
  localStorage.removeItem("token")
  localStorage.removeItem("userId")
  localStorage.removeItem("login")
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeToken.fulfilled, (state) => {
        state.token = null
        state.user = null
        state.login = null
        state.signIn = false
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.signUp = true
        state.users.push(action.payload)
      })
      .addCase(createUser.pending, (state, action) => {
        state.signUp = false
        state.error = null
      })
      .addCase(createUser.rejected, (state, action) => {
        state.signUp = false
        state.error = action.payload
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.signIn = true
        state.token = action.payload.token
      })
      .addCase(auth.pending, (state, action) => {
        state.signIn = false
        state.error = null
      })
      .addCase(auth.rejected, (state, action) => {
        state.signIn = false
        state.error = action.payload
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload
      })
  },
})

export default authSlice.reducer
