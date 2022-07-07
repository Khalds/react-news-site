import React from "react"
import Category from "../Category/Category"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.header_inf}>
          <div className={styles.logo}>
            <h1>
              <a href="">The Intocode News</a>
            </h1>
          </div>
          <nav className={styles.header_nav}>
            <ul>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Register</a>
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
          <Category />
        </nav>
      </div>
    </div>
  )
}

export default Header
