import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import styles from "./LastNewsSidebar.module.css"

function LastNewsSidebar() {
  const newss = useSelector((state) => state.news.news)

  return (
    <div className={styles.Sidebar}>
      {newss.map((news, idx) => {
        if (idx < 6)
          return (
            <div key={idx} className={styles.sidebar_item}>
              <div className={styles.sidebar_item_img}>
                <Link to={`/news/${news._id}`}>
                  <img src={news.img} alt="img" />
                </Link>
              </div>
              <div className={styles.sidebar_item_inf}>
                <div className={styles.category}>
                  <Link to={`/news/${news._id}`}>Finance</Link>
                </div>
                <div className={styles.title}>
                  <h3>
                    <Link to={`/news/${news._id}`}>
                      {news.title.split(" ").slice(0, 9).join(" ") + "..."}
                    </Link>
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
