import React, { useEffect, useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchCategory,
  postCategory,
  removeCategory,
} from "../../../features/category/categorySlice"
import Header from "../../Header/Header"
import Category from "./Category"
import styles from "./Category.module.css"

function Categories() {
  const catigories = useSelector((state) => state.cat.categories)

  const [text, setText] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  const handleSubmit = (e) => {
    setText(e.target.value)
  }

  const addCat = () => {
    if (text) {
      dispatch(postCategory({ text }))
      setText("")
    }
  }

  const delCat = (id) => {
    dispatch(removeCategory(id))
  }

  return (
    <div className={styles.Categories}>
      <Header />
      <div className={styles.container}>
        <div className={styles.add_cat}>
          <div className={styles.cat_input}>
            <input
              placeholder="Add comment..."
              type="text"
              value={text}
              onChange={(e) => handleSubmit(e)}
            />

            <AiFillPlusCircle
              className={styles.icon}
              onClick={(e) => addCat(text)}
            />
          </div>
        </div>
        <div className={styles.all_users}>
          {catigories.map((cat) => {
            return (
              <div className={styles.cat_item}>
                <div className={styles.cat_name}>
                  <Category key={cat._id} cat={cat} />
                </div>
                <div className={styles.cat_del}>
                  <button onClick={(e) => delCat(cat._id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories
