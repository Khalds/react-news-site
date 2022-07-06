import React from "react"

import Header from "../../Header/Header"
import Main from "../../Main/Main"

import styles from "./Homepage.module.css"

function Homepage() {
  return (
    <div className={styles.Homepage}>
      <div className={styles.home_header}>
        <Header />
      </div>
      <div className={styles.home_main}>
        <Main />
      </div>
    </div>
  )
}

export default Homepage
