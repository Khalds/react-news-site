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
  const token = useSelector((state) => state.auth.token)

  const [text, setText] = useState("")

  const [open, setOpen] = useState(false)

  const [openText, setOpenText] = useState("Еще коментарии ▼")

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

  const changeOpen = () => {
    setOpen(!open)

    if (open) {
      setOpenText("Скрыть коментарии ▲")
    } else {
      setOpenText("Еще коментарии ▼")
    }
  }

  return (
    <div className={styles.Comments}>
      <h1>{comments.length} Comments </h1>
      <hr />
      <div
        className={
          comments.length > 0 ? styles.com_list_active : styles.com_list
        }
      >
        {open &&
          comments
            .map((coms) => {
              return <Comment key={coms._id} coms={coms} />
            })
            .slice(0, 2)}

        {!open &&
          comments.map((coms) => {
            return <Comment key={coms._id} coms={coms} />
          })}

        {comments.length > 2 && (
          <span className={styles.open_com} onClick={changeOpen}>
            {openText}
          </span>
        )}
      </div>
      {token && (
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
      )}
    </div>
  )
}

export default Comments
