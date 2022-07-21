import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategory } from "../../../features/category/categorySlice"
import { fetchComments } from "../../../features/comments/commentsSlice"
import { fetchNews } from "../../../features/news/newsSlice"
import styles from "./LastNewsMain.module.css"
import MainBigItem from "./MainBigItem"
import MainItem from "./MainItem"

function LastNewsMain() {
  const newses = useSelector((state) => state.news.news)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComments())
    dispatch(fetchCategory())
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className={styles.LastNewsMain}>
      <div className={styles.main_big_block}>
        {newses
          .map((news) => {
            return <MainBigItem key={news._id} news={news} />
          })
          .reverse()
          .slice(0, 1)}
      </div>
      <div className={styles.main_min}>
        {newses
          .map((news) => {
            return <MainItem key={news._id} news={news} />
          })
          .reverse()
          .slice(1, 3)}
      </div>
    </div>
  )
}

export default LastNewsMain
