import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Category from "../Category/Category"
import styles from "./Header.module.css"

function Header() {
  const catogories = useSelector((state) => state.news.category)
  const dispatch = useDispatch()

  console.log("EEEE", catogories)

  // useEffect(() => {
  //   dispatch(())
  // }, [dispatch])

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
                <Link to="/signin">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
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
            {catogories.map((cat, idx) => {
              return <Category key={idx} cat={cat} />
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
