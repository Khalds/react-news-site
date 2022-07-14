import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeToken } from "../../features/auth/authSlice"
import Category from "../Category/Category"
import styles from "./Header.module.css"

function Header() {
  const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(removeToken())
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.header_inf}>
          <div className={styles.logo}>
            <h1>
              <Link to="/">The Intocode News</Link>
            </h1>
          </div>
          <nav className={styles.header_nav}>
            <ul>
              {token && (
                <li>
                  <a href="/" onClick={logOut}>
                    Log Out
                  </a>
                </li>
              )}
              {!token && (
                <>
                  <li>
                    <Link to="/signin">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Register</Link>
                  </li>
                </>
              )}
              <li>
                <input type="text" placeholder="Search" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.header_category}>
        <nav>
          <ul>
            <Category />
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
