import React from "react"
import { useDispatch } from "react-redux"
import { commentIcon, likeIcon } from "../../../App"

import styles from "./LastNewsMain.module.css"

function MainBigItem({ news, idx }) {
  return (
    <div key={idx} className={styles.news_big_item}>
      <div className={styles.news_img}>
        <img src={news.img} alt="img" />
      </div>
      <div className={styles.category}>
        <a href="">Finance</a>
      </div>
      <div className={styles.title}>
        <h1>
          <a href="">{news.title.split(" ").slice(0, 12).join(" ") + "..."}</a>
        </h1>
      </div>
      <div className={styles.author}>
        <p>
          By <a href="">{news.author}</a>
        </p>
      </div>
      <div className={styles.text}>
        <p>{news.text}</p>
      </div>
      <div className={styles.news_actions}>
        <div className={styles.likes}>
          <img className={styles.like_icon} src={likeIcon} />
          <span className={styles.like_count}>{news.like}</span>
        </div>
        <div className={styles.comments}>
          <img className={styles.comment_icon} src={commentIcon} />
          <span className={styles.comment_count}></span>
        </div>
      </div>
    </div>
  )
}

export default MainBigItem
