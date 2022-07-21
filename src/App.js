import "./App.css"
import { Route, Routes, Navigate } from "react-router-dom"

import Home from "./components/pages/Homepage/Home/Home"
import Signin from "./components/pages/Sign/Signin"
import Signup from "./components/pages/Sign/Signup"
import Post from "./components/pages/Post/Post"
import CategoryPost from "./components/pages/CategoryPost/CategoryPost"
import Users from "./components/pages/Users/Users"
import AddNews from "./components/pages/AddNews/AddNews"
import { useSelector } from "react-redux"
import Categories from "./components/pages/Category/Categories"
import ApprovedNews from "./components/pages/ApprovedNews/ApprovedNews"

export const likeIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xlike.png.pagespeed.ic.IMHrmFwawC.webp"
export const commentIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xchat.png.pagespeed.ic.3ia8c3GYwe.webp"

function App() {
  const token = useSelector((state) => state.auth.token)
  const users = useSelector((state) => state.auth.users)
  const userId = useSelector((state) => state.auth.userId)

  if (token) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {users.map((user) => {
            if (user._id === userId && user.role === "admin") {
              return (
                <>
                  <Route path="/users" element={<Users />} />
                  <Route path="/approved" element={<ApprovedNews />} />
                  <Route path="/category" element={<Categories />} />
                </>
              )
            }
          })}
          <Route path="/addnews" element={<AddNews />} />
          <Route path="/news/:id" element={<Post />} />

          <Route path="/news/category/:id" element={<CategoryPost />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    )
  }
  if (!token)
    return (
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/news/:id" element={<Post />} />
          <Route path="/news/category/:id" element={<CategoryPost />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    )
}

export default App
