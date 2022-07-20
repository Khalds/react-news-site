import React, { useEffect } from "react"
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import { fetchUser } from "../../../features/auth/authSlice"
import { removeNews } from "../../../features/news/newsSlice"

import styles from "./LastNewsMain.module.css"

function MainBigItem({ news }) {
  const comments = useSelector((state) => state.coms.comments)
  const users = useSelector((state) => state.auth.users)
  const catigories = useSelector((state) => state.cat.categories)
  const userId = useSelector((state) => state.auth.userId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const handleDelNews = (id) => {
    dispatch(removeNews(id))
  }

  return (
    <>
      <div className={styles.news_big_item}>
        <div className={styles.news_img}>
          <Link to={`/news/${news._id}`}>
            <img src={`http://localhost:4000/${news.images}`} alt="img" />
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
        <div className={styles.news_actions}>
          <Link to={`/news/${news._id}`}>
            <div className={styles.add_actions}>
              <div className={styles.likes}>
                <img className={styles.like_icon} src={likeIcon} />
                <span className={styles.like_count}>{news.like.length}</span>
              </div>

              <div className={styles.comments}>
                <img className={styles.comment_icon} src={commentIcon} />
                <span className={styles.comment_count}>{comments.length}</span>
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
    </>
  )
}

export default MainBigItem
