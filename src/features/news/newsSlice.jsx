import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  news: [
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x16.jpg.pagespeed.ic._cog5EESqN.webp",
      title: "Financial news: A new company is born today at the stock market",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x17.jpg.pagespeed.ic.Uei0CDdNcW.webp",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eumetus sit amet odio sodales placerat. Sed varius leo ac...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x18.jpg.pagespeed.ic.c46znM5-lG.webp",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eumetus sit amet odio sodales placerat. Sed varius leo ac...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x12.jpg.pagespeed.ic.44laUPEeLa.webp",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eumetus sit amet odio sodales placerat. Sed varius leo ac...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x13.jpg.pagespeed.ic.L9t5r5pV5a.webp",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eumetus sit amet odio sodales placerat. Sed varius leo ac...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x14.jpg.pagespeed.ic.62B-fUdWRC.webp",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eumetus sit amet odio sodales placerat. Sed varius leo ac...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
    {
      img: "https://preview.colorlib.com/theme/newspaper/img/bg-img/x15.jpg.pagespeed.ic.Z2WERFCxKV.webp",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eumetus sit amet odio sodales placerat. Sed varius leo ac...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
    {
      img: "data:image/webp;base64,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",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eumetus sit amet odio sodales placerat. Sed varius leo ac...",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.",
      author: "Khalid",
    },
  ],
  category: [
    { name: "Politics" },
    { name: "Sport" },
    { name: "Finance" },
    { name: "Health" },
    { name: "Travel" },
  ],
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
