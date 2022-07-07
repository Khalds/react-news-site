import React from "react"
import styles from "./PopularNewsSidebar.module.css"

function PopularNewsSidebar() {
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
            <div className={styles.news_item}>
              <div className={styles.news_idx}>1.</div>
              <div className={styles.news_inf}>
                <div className={styles.title}>
                  <h6>
                    <a href="">
                      Amet, consectetur adipiscing elit. Nam eu metus sit amet
                      odio sodales.
                    </a>
                  </h6>
                </div>
                <div className={styles.date}>APRIL 14, 2018</div>
              </div>
            </div>

            <div className={styles.news_item}>
              <div className={styles.news_idx}>2.</div>
              <div className={styles.news_inf}>
                <div className={styles.title}>
                  <h6>
                    <a href="">
                      Amet, consectetur adipiscing elit. Nam eu metus sit amet
                      odio sodales.
                    </a>
                  </h6>
                </div>
                <div className={styles.date}>APRIL 14, 2018</div>
              </div>
            </div>
            <div className={styles.news_item}>
              <div className={styles.news_idx}>3.</div>
              <div className={styles.news_inf}>
                <div className={styles.title}>
                  <h6>
                    <a href="">
                      Amet, consectetur adipiscing elit. Nam eu metus sit amet
                      odio sodales.
                    </a>
                  </h6>
                </div>
                <div className={styles.date}>APRIL 14, 2018</div>
              </div>
            </div>
            <div className={styles.news_item}>
              <div className={styles.news_idx}>4.</div>
              <div className={styles.news_inf}>
                <div className={styles.title}>
                  <h6>
                    <a href="">
                      Amet, consectetur adipiscing elit. Nam eu metus sit amet
                      odio sodales.
                    </a>
                  </h6>
                </div>
                <div className={styles.date}>APRIL 14, 2018</div>
              </div>
            </div>
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
