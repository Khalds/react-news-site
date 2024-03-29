import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../Header/Header"
import styles from "./AddNews.module.css"
import "./AddNews.module.css"
import Footer from "../../Footer/Footer"

import iconNews from "../../image/news_img.png"
import { postNews } from "../../../features/news/newsSlice"
import { useNavigate } from "react-router-dom"

function AddNews() {
  const category = useSelector((state) => state.cat.categories)

  const author = useSelector((state) => state.auth.login)
  const authorId = useSelector((state) => state.auth.userId)

  const [preview, setPreview] = useState("")
  const [photo, setPhoto] = useState("")

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [categor, setCategor] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const sendFile = () => {
    if (photo && title && text && categor) {
      dispatch(postNews({ photo, title, text, categor, authorId }))

      setTitle("")
      setText("")
      setCategor("")
      setPhoto("")

      navigate("/")
    }
    return
  }

  useEffect(() => {
    if (photo) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(photo)
    } else {
      setPreview(null)
    }
  }, [dispatch, photo])

  return (
    <div className={styles.AddNews}>
      <Header />
      <div className={styles.container}>
        <div className={styles.news_form}>
          <div className={styles.img_input}>
            <h2>IMG:</h2>

            <label htmlFor="img" className={styles.photo}>
              {photo ? (
                <img className={styles.logo} src={preview} alt="photo" />
              ) : (
                <img className={styles.logo} src={`${iconNews}`} alt="photo" />
              )}
            </label>
            <input
              id="img"
              hidden
              type="file"
              onChange={(e) => {
                const file = e.target.files[0]
                if (file && file.type.substring(0, 5) === "image") {
                  setPhoto(file)
                } else {
                  setPhoto(null)
                }
              }}
            />
          </div>
          <div className={styles.author_input}>
            <h2>Author: </h2>
            <p>{author}</p>
          </div>
          <div className={styles.category_input}>
            <h2>Category: </h2>
            <select
              value={categor}
              onChange={(e) => setCategor(e.target.value)}
            >
              <option value={""}> Выберите категорию</option>
              {category.map((cat) => {
                return (
                  <option required value={cat._id} key={cat._id}>
                    {cat.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className={styles.title_input}>
            <h2>Title: </h2>
            <input
              required
              type="text"
              value={title}
              autofocus
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.text_input}>
            <h2>Text: </h2>
            <textarea
              required
              rows="12"
              cols="65"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div className={styles.send_button}>
            <button onClick={sendFile}>Send news</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddNews
