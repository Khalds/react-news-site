import React from "react"

import Header from "../../../Header/Header"
import Main from "../../../Main/LastNewsMain/LastNewsMain"
import PopularNewsMain from "../../../Main/PopularNewsMain/PopularNewsMain"
import PopularNewsSidebar from "../../../Sidebars/PopularNewsSidebar/PopularNewsSidebar"
import Sidebar from "../../../Sidebars/LastNewsSidebar/LastNewsSidebar"

import styles from "./Home.module.css"
import Footer from "../../../Footer/Footer"

function Homepage() {
  return (
    <div className={styles.Homepage}>
      <Header />
      <div className={styles.home_container}>
        <div className={styles.home_cont_top}>
          <Main className={styles.home_main} />
          <Sidebar className={styles.home_sidebar} />
        </div>
        <div className={styles.home_cont_mid}>
          <PopularNewsMain />
          <PopularNewsSidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
