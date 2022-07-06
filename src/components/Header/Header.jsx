import React from "react"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <a href="">The Chechen News</a>
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
  )
}

export default Header
