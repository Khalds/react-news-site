import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import { fetchNews } from "../../../features/news/newsSlice"
import Comments from "../../Comments/Comments"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import LastNewsSidebar from "../../Sidebars/LastNewsSidebar/LastNewsSidebar"

import styles from "./Post.module.css"

function Post() {
  const newses = useSelector((state) => state.news.news)
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className={styles.Post}>
      <Header />
      <div className={styles.main}>
        {newses.map((newsOne, idx) => {
          if (id === newsOne._id)
            return (
              <div key={idx} className={styles.main_post}>
                <div className={styles.news_img}>
                  <img src={newsOne.img} alt="img" />
                </div>
                <div className={styles.category}>
                  <Link to={`/news/${newsOne._id}`}>Finance</Link>
                </div>
                <div className={styles.title}>
                  <h1>
                    <Link to={`/news/${newsOne._id}`}>{newsOne.title}</Link>
                  </h1>
                </div>
                <div className={styles.author}>
                  <p>
                    By <Link to={`/news/${newsOne._id}`}>{newsOne.author}</Link>
                  </p>
                </div>
                <div className={styles.text}>
                  <p>{newsOne.text}</p>
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
