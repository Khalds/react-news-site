import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { commentIcon, likeIcon } from "../../../App"
import { fetchNews } from "../../../features/news/newsSlice"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import LastNewsSidebar from "../../Sidebars/LastNewsSidebar/LastNewsSidebar"
import styles from "./CategoryPost.module.css"

function CategoryPost() {
  const { id } = useParams()

  const newses = useSelector((state) => state.news.news)
  const comments = useSelector((state) => state.coms.comments)
  const catigories = useSelector((state) => state.cat.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className={styles.CategoryPost}>
      <Header />
      <div className={styles.main}>
        <div className={styles.main_news}>
          {newses.map((news) => {
            if (id === news.category)
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
                        {news.text.split(" ").length > 15
                          ? news.text.split(" ").slice(0, 18).join(" ") + "..."
                          : news.text}
                      </Link>
                    </h1>
                  </div>
                  <div className={styles.news_actions}>
                    <div className={styles.likes}>
                      <img className={styles.like_icon} src={likeIcon} />
                      <span className={styles.like_count}>
                        {news.like.length}
                      </span>
                    </div>
                    <Link to={`/news/${news._id}`}>
                      <div className={styles.comments}>
                        <img
                          className={styles.comment_icon}
                          src={commentIcon}
                        />
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
          })}
        </div>
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

export default CategoryPost
