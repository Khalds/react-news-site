import React from "react"
import { useSelector } from "react-redux"
import { commentIcon, likeIcon } from "../../../App"
import Footer from "../../Footer/Footer"

import styles from "./PopularNewsMain.module.css"

function PopularNewsMain() {
  const newses = useSelector((state) => state.news.news)

  return (
    <div className={styles.PopularNewsMain}>
      <div className={styles.main_header}>
        <div className={styles.header_block}>
          <h2>Popular News</h2>
        </div>
      </div>

      <div className={styles.main_news}>
        {newses.map((news, idx) => {
          if (idx < 4)
            return (
              <div key={idx} className={styles.news_item}>
                <div className={styles.news_img}>
                  <img src={news.img} alt="img" />
                </div>
                <div className={styles.category}>
                  <a href="">Finance</a>
                </div>
                <div className={styles.title}>
                  <h1>
                    <a href="">
                      {news.title.split(" ").slice(0, 18).join(" ") + "..."}
                    </a>
                  </h1>
                </div>
                <div className={styles.news_actions}>
                  <div className={styles.likes}>
                    <img className={styles.like_icon} src={likeIcon} />
                    <span className={styles.like_count}>392</span>
                  </div>
                  <div className={styles.comments}>
                    <img className={styles.comment_icon} src={commentIcon} />
                    <span className={styles.comment_count}>10</span>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default PopularNewsMain
