import React, { useEffect } from "react"
import styles from "./Users.module.css"
import { FaUserCircle } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchUser,
  getUserAdmin,
  removeUsers,
} from "../../../features/auth/authSlice"

function User({ user }) {
  const dispatch = useDispatch()

  const dellUser = () => {
    dispatch(removeUsers(user._id))
  }

  const getAdmin = () => {
    dispatch(getUserAdmin(user))
  }

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className={styles.user_card}>
      <div className={styles.user_avatar}>
        <FaUserCircle className={styles.avatar} />
      </div>
      <div className={styles.user_info}>
        <div className={styles.user_name}>
          <h4>Name:</h4>
          {user.login}
        </div>
        <div className={styles.user_discription}>
          <h4>Role:</h4>
          {user.role}
        </div>
      </div>
      <div className={styles.user_actions}>
        <button onClick={getAdmin} className={styles.admin_button}>
          {user.role !== "admin" ? "Get Admin" : "Select admin"}
        </button>
        <button onClick={dellUser} className={styles.dell_button}>
          Dell User
        </button>
      </div>
    </div>
  )
}

export default User
