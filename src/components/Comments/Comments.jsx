import React, { useEffect, useState } from "react"
import Comment from "../Comment/Comment"
import styles from "./Comments.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchCommentsById,
  postComment,
} from "../../features/comments/commentsSlice"

import { AiFillPlusCircle } from "react-icons/ai"

function Comments({ id }) {
  const comments = useSelector((state) => state.coms.comments)
  const [text, setText] = useState("")

  const userId = localStorage.getItem("userId")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCommentsById(id))
  }, [dispatch])

  const handleSubmit = (e) => {
    setText(e.target.value)
  }

  const addComent = (text, id, userId) => {
    if (text) {
      dispatch(postComment({ text, id, userId }))

      setText("")
    }
  }

  return (
    <div className={styles.Comments}>
      <h1>{comments.length} Comments </h1>
      <hr />
      <div className={styles.com_list}>
        {comments.map((coms, idx) => {
          return <Comment coms={coms} idx={idx} />
        })}
      </div>
      <div className={styles.com_input}>
        <h2>Add comment:</h2>
        <input type="text" value={text} onChange={(e) => handleSubmit(e)} />

        <AiFillPlusCircle className={styles.icon} onClick={addComent} />
      </div>
    </div>
  )
}

export default Comments
