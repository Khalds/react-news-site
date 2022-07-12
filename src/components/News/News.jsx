import React from "react"
import styles from "./News.module.css"

export const likeIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xlike.png.pagespeed.ic.IMHrmFwawC.webp"
export const commentIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xchat.png.pagespeed.ic.3ia8c3GYwe.webp"

function News({ news }) {
  return (
    <div className={styles.min_item}>
      <div className={styles.news_img}>
        <img src={news.img} alt="" />
      </div>
      <div className={styles.category}>
        <a href="">Finance</a>
      </div>
      <div className={styles.title}>
        <h1>
          <a href="">{news.title}</a>
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
}

export default News
