import "./App.css"
import { Route, Routes, Navigate } from "react-router-dom"

import Home from "./components/pages/Homepage/Home/Home"
import Signin from "./components/pages/Sign/Signin"
import Signup from "./components/pages/Sign/Signup"
import Post from "./components/pages/Post/Post"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  )
}

export default App
