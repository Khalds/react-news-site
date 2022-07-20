import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import { fetchUser } from "../../../features/auth/authSlice"
import {
  addLike,
  disLike,
  fetchNews,
  removeNews,
} from "../../../features/news/newsSlice"
import Comments from "../../Comments/Comments"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import LastNewsSidebar from "../../Sidebars/LastNewsSidebar/LastNewsSidebar"

import { MdDelete } from "react-icons/md"

import styles from "./Post.module.css"

function Post() {
  const newses = useSelector((state) => state.news.news)
  const users = useSelector((state) => state.auth.users)
  const comments = useSelector((state) => state.coms.comments)
  const catigories = useSelector((state) => state.cat.categories)

  const userId = useSelector((state) => state.auth.userId)

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchNews())
  }, [dispatch])

  const handleLike = () => {
    dispatch(addLike({ id, userId }))
  }

  const handleDisLike = () => {
    dispatch(disLike({ id, userId }))
  }

  const handleDelNews = (id) => {
    dispatch(removeNews(id))
  }

  return (
    <div className={styles.Post}>
      <Header />
      <div className={styles.main}>
        {newses.map((news) => {
          if (id === news._id)
            return (
              <div key={news._id} className={styles.main_post}>
                <div className={styles.news_img}>
                  <img src={`http://localhost:4000/${news.images}`} alt="img" />
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
                    <Link to={`/news/${news._id}`}>{news.title}</Link>
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
                  <p>{news.text}</p>
                </div>
                <div className={styles.news_actions}>
                  <div className={styles.add_actions}>
                    {news.like.find((like) => like === userId) === userId && (
                      <div onClick={handleDisLike} className={styles.dis_likes}>
                        <img className={styles.like_icon} src={likeIcon} />
                        <span className={styles.like_count}>
                          {news.like.length}
                        </span>
                      </div>
                    )}
                    {news.like.find((like) => like === userId) !== userId && (
                      <div onClick={handleLike} className={styles.likes}>
                        <img className={styles.like_icon} src={likeIcon} />
                        <span className={styles.like_count}>
                          {news.like.length}
                        </span>
                      </div>
                    )}

                    <div className={styles.comments}>
                      <img className={styles.comment_icon} src={commentIcon} />
                      <span className={styles.comment_count}>
                        {comments.length}
                      </span>
                    </div>
                  </div>
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
                <div className={styles.Comments}>
                  <Comments id={id} />
                </div>
              </div>
            )
        })}
        <div className={styles.side}>
          <LastNewsSidebar />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Post
