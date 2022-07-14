import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import Comments from "../../Comments/Comments"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import LastNewsSidebar from "../../Sidebars/LastNewsSidebar/LastNewsSidebar"

import styles from "./Post.module.css"

function Post() {
  const newses = useSelector((state) => state.news.news)
  const { id } = useParams()

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
                  <a href="">Finance</a>
                </div>
                <div className={styles.title}>
                  <h1>
                    <a href="">{newsOne.title}</a>
                  </h1>
                </div>
                <div className={styles.author}>
                  <p>
                    By <a href="">{newsOne.author.login}</a>
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
                  <Comments />
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
