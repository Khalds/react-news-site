import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../../features/auth/authSlice"
import { MdDelete } from "react-icons/md"

import styles from "./Comment.module.css"
import { removeComments } from "../../features/comments/commentsSlice"

function Comment({ coms }) {
  const users = useSelector((state) => state.auth.users)
  const userId = useSelector((state) => state.auth.userId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const deleteCom = (id) => {
    dispatch(removeComments(id))
  }

  return (
    <div key={coms._id} className={styles.com_item}>
      <div className={styles.user_name}>
        {users.map((user) => {
          if (coms.user === user._id) return user.login
        })}
      </div>
      <div className={styles.user_text}>{coms.text}</div>
      {userId === coms.user && (
        <span onClick={() => deleteCom(coms._id)}>
          <MdDelete className={styles.del_com} />
        </span>
      )}
    </div>
  )
}

export default Comment
