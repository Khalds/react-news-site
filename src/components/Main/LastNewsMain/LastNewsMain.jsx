import React from "react"
import { useSelector } from "react-redux"
import News from "../../News/News"
import styles from "./LastNewsMain.module.css"

export const likeIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xlike.png.pagespeed.ic.IMHrmFwawC.webp"
export const commentIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xchat.png.pagespeed.ic.3ia8c3GYwe.webp"

function LastNewsMain() {
  const newses = useSelector((state) => state.news.news)

  return (
    <div className={styles.LastNewsMain}>
      {
        <div className={styles.main_big_block}>
          <div className={styles.news_img}>
            <img src={newses[0].img} alt="" />
          </div>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h1>
              <a href="">{newses[0].title}</a>
            </h1>
          </div>
          <div className={styles.author}>
            <p>
              By <a href="">{newses[0].author}</a>
            </p>
          </div>
          <div className={styles.text}>
            <p>{newses[0].text}</p>
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
      }

      <div className={styles.main_min}>
        {newses.slice(1, 3).map((news) => {
          return <News news={news} />
        })}
      </div>
    </div>
  )
}

export default LastNewsMain
