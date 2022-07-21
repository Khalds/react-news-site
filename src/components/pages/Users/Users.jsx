import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../../../features/auth/authSlice"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import User from "./User"
import styles from "./Users.module.css"

function Users() {
  const users = useSelector((state) => state.auth.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className={styles.Users}>
      <Header />
      <div className={styles.container}>
        <div className={styles.all_users}>
          {users.map((user) => {
            return <User key={user._id} user={user} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Users
