import React from "react"
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import { removeNews } from "../../../features/news/newsSlice"

import styles from "./PopularNewsMain.module.css"

function PopularNewsMain() {
  const newses = useSelector((state) => state.news.news)
  const comments = useSelector((state) => state.coms.comments)
  const users = useSelector((state) => state.auth.users)
  const catigories = useSelector((state) => state.cat.categories)
  const userId = useSelector((state) => state.auth.userId)

  const dispatch = useDispatch()

  const handleDelNews = (id) => {
    dispatch(removeNews(id))
  }

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
                    <img
                      src={`http://localhost:4000/${news.images}`}
                      alt="img"
                    />
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
                      {news.text.split(" ").slice(0, 12).join(" ") + "..."}
                    </Link>
                  </h1>
                </div>
                <div className={styles.news_actions}>
                  <Link to={`/news/${news._id}`}>
                    <div className={styles.add_actions}>
                      <div className={styles.likes}>
                        <img className={styles.like_icon} src={likeIcon} />
                        <span className={styles.like_count}>
                          {news.like.length}
                        </span>
                      </div>
                      <div className={styles.comments}>
                        <img
                          className={styles.comment_icon}
                          src={commentIcon}
                        />
                        <span className={styles.comment_count}>
                          {comments.length}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className={styles.del_actions}>
                    {users.map((user) => {
                      if (user._id === userId && user.role === "admin") {
                        return (
                          <span onClick={(e) => handleDelNews(news._id)}>
                            <MdDelete className={styles.del_com} />
                          </span>
                        )
                      }
                    })}
                  </div>
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
