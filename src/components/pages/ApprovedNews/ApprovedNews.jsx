import React, { useEffect } from "react"
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchNews } from "../../../features/news/newsSlice"
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"

import styles from "./ApprovedNews.module.css"

function ApprovedNews() {
  const newses = useSelector((state) => state.news.news)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className={styles.ApprovedNews}>
      <Header />
      <div className={styles.container}>
        <div className={styles.all_news}>
          <h1>Новости на одобрение:</h1>

          {newses.map((news) => {
            if (news.approved === false)
              return (
                <div className={styles.news_item}>
                  <div className={styles.news_img}>
                    <Link to={`/news/${news._id}`}>
                      <img
                        src={`http://localhost:4000/${news.images}`}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className={styles.news_inf}>
                    <p className={styles.news_title}>{news.title}</p>
                    <p className={styles.news_text}>
                      {news.text.split(" ").slice(0, 36).join(" ") + "..."}
                    </p>
                  </div>
                  <div className={styles.news_actions}>
                    <div className={styles.add_btn}>
                      <button>Approved</button>
                    </div>
                  </div>
                  <div className={styles.del_news}>
                    <MdDelete className={styles.del_com} />
                  </div>
                </div>
              )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ApprovedNews
