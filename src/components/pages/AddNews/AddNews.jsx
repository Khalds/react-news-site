import React from "react"
import { useSelector } from "react-redux"
import Header from "../../Header/Header"
import styles from "./AddNews.module.css"

function AddNews() {
  const category = useSelector((state) => state.cat.categories)

  const author = useSelector((state) => state.auth.login)

  return (
    <div className={styles.AddNews}>
      <Header />
      <div className={styles.container}>
        <div className={styles.news_form}>
          <div className={styles.img_input}>
            <h3>IMG:</h3>
            <input type="file" placeholder="IMG" />
          </div>
          <div className={styles.author_input}>
            <h3>Author: </h3>
            <p>{author}</p>
          </div>
          <div className={styles.title_input}>
            <h3>Title: </h3>
            <input type="text" placeholder="Title" />
          </div>
          <div className={styles.text_input}>
            <h3>Text: </h3>
            <input type="textarea" placeholder="Text" />
          </div>
          <div className={styles.category_input}>
            <h3>Category: </h3>
            <select>
              {category.map((cat) => {
                return <option key={cat._id}>{cat.name}</option>
              })}
            </select>
          </div>
          <div>
            <button>Add news</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNews
