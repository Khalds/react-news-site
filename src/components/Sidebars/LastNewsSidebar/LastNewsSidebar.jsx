import React from "react"
import { useSelector } from "react-redux"

import styles from "./LastNewsSidebar.module.css"

function LastNewsSidebar() {
  const newss = useSelector((state) => state.news.news)

  return (
    <div className={styles.Sidebar}>
      {newss.slice(0, 6).map((news) => {
        return (
          <div className={styles.sidebar_item}>
            <div className={styles.sidebar_item_img}>
              <img src={news.img} alt="" />
            </div>
            <div className={styles.sidebar_item_inf}>
              <div className={styles.category}>
                <a href="">Finance</a>
              </div>
              <div className={styles.title}>
                <h3>
                  <a href="">
                    {news.title.split(" ").slice(0, 9).join(" ") + "..."}
                  </a>
                </h3>
              </div>
              <div className={styles.date}>
                <span>7:00 AM</span> || <span>April 14</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LastNewsSidebar
