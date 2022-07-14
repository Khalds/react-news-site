import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews } from "../../../features/news/newsSlice"
import styles from "./LastNewsMain.module.css"
import MainBigItem from "./MainBigItem"
import MainItem from "./MainItem"

function LastNewsMain() {
  const newses = useSelector((state) => state.news.news)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className={styles.LastNewsMain}>
      <div className={styles.main_big_block}>
        {newses.map((news, idx) => {
          if (idx === 0) return <MainBigItem news={news} idx={idx} />
        })}
      </div>
      <div className={styles.main_min}>
        {newses.map((news, idx) => {
          if (idx > 0 && idx < 3) return <MainItem news={news} idx={idx} />
        })}
      </div>
    </div>
  )
}

export default LastNewsMain
