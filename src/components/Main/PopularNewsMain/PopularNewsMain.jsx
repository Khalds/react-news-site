import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"

import styles from "./PopularNewsMain.module.css"

function PopularNewsMain() {
  const newses = useSelector((state) => state.news.news)
  const comments = useSelector((state) => state.coms.comments)
  const catigories = useSelector((state) => state.cat.categories)

  return (
    <div className={styles.PopularNewsMain}>
      <div className={styles.main_header}>
        <div className={styles.header_block}>
          <h2>Popular News</h2>
        </div>
      </div>

      <div className={styles.main_news}>
        {newses
          .map((news) => {
            return (
              <div key={news._id} className={styles.news_item}>
                <div className={styles.news_img}>
                  <Link to={`/news/${news._id}`}>
                    <img src={news.img} alt="img" />
                  </Link>
                </div>
                <div className={styles.category}>
                  <Link to={`/news/${news._id}`}>
                    {catigories.map((cat) => {
                      if (news.category === cat._id) return cat.name
                    })}
                  </Link>
                </div>
                <div className={styles.title}>
                  <h1>
                    <Link to={`/news/${news._id}`}>
                      {news.title.split(" ").slice(0, 18).join(" ") + "..."}
                    </Link>
                  </h1>
                </div>
                <div className={styles.news_actions}>
                  <div className={styles.likes}>
                    <img className={styles.like_icon} src={likeIcon} />
                    <span className={styles.like_count}>392</span>
                  </div>
                  <Link to={`/news/${news._id}`}>
                    <div className={styles.comments}>
                      <img className={styles.comment_icon} src={commentIcon} />
                      <span className={styles.comment_count}>
                        {
                          comments.filter(
                            (comment) => comment.news === news._id
                          ).length
                        }
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })
          .slice(0, 4)}
      </div>
    </div>
  )
}

export default PopularNewsMain
