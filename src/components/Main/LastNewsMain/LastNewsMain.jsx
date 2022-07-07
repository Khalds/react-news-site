import React from "react"
import styles from "./LastNewsMain.module.css"

export const likeIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xlike.png.pagespeed.ic.IMHrmFwawC.webp"
export const commentIcon =
  "https://preview.colorlib.com/theme/newspaper/img/core-img/xchat.png.pagespeed.ic.3ia8c3GYwe.webp"

function LastNewsMain() {
  return (
    <div className={styles.LastNewsMain}>
      <div className={styles.main_big_block}>
        <div className={styles.news_img}>
          <img
            src="https://preview.colorlib.com/theme/newspaper/img/bg-img/x16.jpg.pagespeed.ic._cog5EESqN.webp"
            alt=""
          />
        </div>
        <div className={styles.category}>
          <a href="">Finance</a>
        </div>
        <div className={styles.title}>
          <h1>
            <a href="">
              Financial news: A new company is born today at the stock market
            </a>
          </h1>
        </div>
        <div className={styles.author}>
          <p>
            By <a href="">Khalid Abaev</a>
          </p>
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
            metus sit amet odio sodales placerat. Sed varius leo ac leo
            fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et
            ornare neque ullamcorper ac. Nam id congue lectus, a venenatis
            massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat
            sem.
          </p>
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

      <div className={styles.main_min}>
        <div className={styles.min_item}>
          <div className={styles.news_img}>
            <img
              src="https://preview.colorlib.com/theme/newspaper/img/bg-img/x17.jpg.pagespeed.ic.Uei0CDdNcW.webp"
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
        <div className={styles.min_item}>
          <div className={styles.news_img}>
            <img
              src="https://preview.colorlib.com/theme/newspaper/img/bg-img/x17.jpg.pagespeed.ic.Uei0CDdNcW.webp"
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

export default LastNewsMain
