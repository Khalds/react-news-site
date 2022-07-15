import React, { useEffect, useState } from "react"
import Comment from "../Comment/Comment"
import styles from "./Comments.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchCommentsById,
  postComment,
} from "../../features/comments/commentsSlice"

import { AiFillPlusCircle } from "react-icons/ai"
import { fetchUser } from "../../features/auth/authSlice"

function Comments({ id }) {
  const comments = useSelector((state) => state.coms.comments)

  const [text, setText] = useState("")

  const userId = localStorage.getItem("userId")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchCommentsById(id))
  }, [dispatch])

  const handleSubmit = (e) => {
    setText(e.target.value)
  }

  const addComent = (text) => {
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
        <input
          placeholder="Add comment..."
          type="text"
          value={text}
          onChange={(e) => handleSubmit(e)}
        />

        <AiFillPlusCircle
          className={styles.icon}
          onClick={(e) => addComent(text)}
        />
      </div>
    </div>
  )
}

export default Comments
