import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchUser, removeToken } from "../../features/auth/authSlice"
import Category from "../Category/Category"
import styles from "./Header.module.css"

import { TbNewSection } from "react-icons/tb"
import { ImUsers } from "react-icons/im"

function Header() {
  const token = useSelector((state) => state.auth.token)
  const login = useSelector((state) => state.auth.login)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

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
              <li>
                <Link to="/users">
                  All users <ImUsers />
                </Link>
              </li>
              <li>
                <Link to="/addnews">
                  Add news <TbNewSection />
                </Link>
              </li>
              {token && (
                <li>
                  <a href="/" onClick={logOut}>
                    Log Out {login}
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
