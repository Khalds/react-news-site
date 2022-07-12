import React from "react"
import { useSelector } from "react-redux"
import styles from "./PopularNewsSidebar.module.css"

function PopularNewsSidebar() {
  const newses = useSelector((state) => state.news.news)

  return (
    <div className={styles.PopularNewsSidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.sidebar_block}>
          <h2>Info</h2>
        </div>
      </div>

      <div className={styles.sidebar_items}>
        <div className={styles.most_news_block}>
          <h1>4 Most Popular News</h1>
          <div className={styles.sidebar_news}>
            {newses.slice(0, 4).map((news, idx) => {
              return (
                <div className={styles.news_item}>
                  <div className={styles.news_idx}>{idx + 1}.</div>
                  <div className={styles.news_inf}>
                    <div className={styles.title}>
                      <h6>
                        <a href="">
                          {news.title.split(" ").slice(0, 12).join(" ") + "..."}
                        </a>
                      </h6>
                    </div>
                    <div className={styles.date}>APRIL 14, 2018</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.subscribe_block}>
          <h1>Newsletter</h1>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default PopularNewsSidebar
