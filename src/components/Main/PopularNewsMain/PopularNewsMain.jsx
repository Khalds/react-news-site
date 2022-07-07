import React from "react"
import { commentIcon, likeIcon } from "../LastNewsMain/LastNewsMain"

import styles from "./PopularNewsMain.module.css"

function PopularNewsMain() {
  return (
    <div className={styles.PopularNewsMain}>
      <div className={styles.main_header}>
        <div className={styles.header_block}>
          <h2>Popular News</h2>
        </div>
      </div>

      <div className={styles.main_news}>
        <div className={styles.news_item}>
          <div className={styles.news_img}>
            <img
              src="https://preview.colorlib.com/theme/newspaper/img/bg-img/x12.jpg.pagespeed.ic.44laUPEeLa.webp"
              alt=""
            />
          </div>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h1>
              <a href="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                metus sit amet odio sodales placerat. Sed varius leo ac...
              </a>
            </h1>
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
        </div>
        <div className={styles.news_item}>
          <div className={styles.news_img}>
            <img
              src="https://preview.colorlib.com/theme/newspaper/img/bg-img/x12.jpg.pagespeed.ic.44laUPEeLa.webp"
              alt=""
            />
          </div>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h1>
              <a href="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                metus sit amet odio sodales placerat. Sed varius leo ac...
              </a>
            </h1>
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
        </div>
        <div className={styles.news_item}>
          <div className={styles.news_img}>
            <img
              src="https://preview.colorlib.com/theme/newspaper/img/bg-img/x12.jpg.pagespeed.ic.44laUPEeLa.webp"
              alt=""
            />
          </div>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h1>
              <a href="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                metus sit amet odio sodales placerat. Sed varius leo ac...
              </a>
            </h1>
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
        </div>
        <div className={styles.news_item}>
          <div className={styles.news_img}>
            <img
              src="https://preview.colorlib.com/theme/newspaper/img/bg-img/x12.jpg.pagespeed.ic.44laUPEeLa.webp"
              alt=""
            />
          </div>
          <div className={styles.category}>
            <a href="">Finance</a>
          </div>
          <div className={styles.title}>
            <h1>
              <a href="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                metus sit amet odio sodales placerat. Sed varius leo ac...
              </a>
            </h1>
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
        </div>
      </div>
    </div>
  )
}

export default PopularNewsMain
