import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../../features/auth/authSlice"

import styles from "./Comment.module.css"

function Comment({ coms }) {
  const users = useSelector((state) => state.auth.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div key={coms._id} className={styles.com_item}>
      <div className={styles.user_name}>
        {users.map((user) => {
          if (coms.user === user._id) return user.login
        })}
      </div>
      <div className={styles.user_text}>{coms.text}</div>
    </div>
  )
}

export default Comment
