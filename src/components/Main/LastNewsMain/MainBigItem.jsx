import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import { fetchUser } from "../../../features/auth/authSlice"

import styles from "./LastNewsMain.module.css"

function MainBigItem({ news }) {
  const comments = useSelector((state) => state.coms.comments)
  const users = useSelector((state) => state.auth.users)
  const catigories = useSelector((state) => state.cat.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <>
      <div className={styles.news_big_item}>
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
              {news.title.split(" ").length > 10
                ? news.title.split(" ").slice(0, 11).join(" ") + "..."
                : news.title}
            </Link>
          </h1>
        </div>
        <div className={styles.author}>
          <p>
            By
            <Link to={`/news/${news._id}`}>
              {users.map((user) => {
                if (user._id === news.author) return ` ${user.login}`
              })}
            </Link>
          </p>
        </div>
        <div className={styles.text}>
          <p>{news.text.split(" ").slice(0, 60).join(" ")}</p>
        </div>
        <Link to={`/news/${news._id}`}>
          <div className={styles.news_actions}>
            <div className={styles.likes}>
              <img className={styles.like_icon} src={likeIcon} />
              <span className={styles.like_count}>{news.like.length}</span>
            </div>
            <Link to={`/news/${news._id}`}>
              <div className={styles.comments}>
                <img className={styles.comment_icon} src={commentIcon} />
                <span className={styles.comment_count}>
                  {
                    comments.filter((comment) => comment.news === news._id)
                      .length
                  }
                </span>
              </div>
            </Link>
          </div>
        </Link>
      </div>
    </>
  )
}

export default MainBigItem
