import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchUser, removeToken } from "../../features/auth/authSlice"
import Category from "../pages/Category/Category"
import styles from "./Header.module.css"

import { TbNewSection } from "react-icons/tb"
import { ImUsers } from "react-icons/im"

function Header() {
  const token = useSelector((state) => state.auth.token)
  const catigories = useSelector((state) => state.cat.categories)

  const users = useSelector((state) => state.auth.users)
  const userId = useSelector((state) => state.auth.userId)

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
              {users.map((user) => {
                if (user._id === userId && user.role === "admin") {
                  return (
                    <>
                      <li>
                        <Link to="/approved">
                          Approved news <ImUsers />
                        </Link>
                      </li>
                      <li>
                        <Link to="/users">
                          All users <ImUsers />
                        </Link>
                      </li>
                      <li>
                        <Link to="/category">
                          All category <ImUsers />
                        </Link>
                      </li>
                    </>
                  )
                }
              })}

              {token && (
                <>
                  <li>
                    <Link to="/addnews">
                      Add news <TbNewSection />
                    </Link>
                  </li>
                  <li>
                    <a href="/" onClick={logOut}>
                      Log Out
                    </a>
                  </li>
                </>
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
            {catigories
              .map((cat) => {
                return (
                  <li>
                    <Category key={cat._id} cat={cat} />
                  </li>
                )
              })
              .slice(0, 6)}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
