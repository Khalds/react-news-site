import React from "react"
import { useSelector } from "react-redux"
import Category from "../pages/Category/Category"

import styles from "./Footer.module.css"

function Footer() {
  const catigories = useSelector((state) => state.cat.categories)

  return (
    <div className={styles.footer}>
      <div className={styles.footer_inf}>
        <div className={styles.footer_logo}>
          <h1>The Intocode News</h1>
        </div>
        <div className={styles.category}>
          <ul>
            {catigories
              .map((cat) => {
                return (
                  <li>
                    <Category key={cat._id} cat={cat} />
                  </li>
                )
              })
              .slice(0, 6)}
          </ul>
        </div>
        <div className={styles.contacts}>
          <h3>Contact:</h3>
          <p>
            <a href="">intocode@mail.ru</a>
          </p>
          <p>
            <a href="">+7(999) 999 99-99</a>
          </p>
          <p>
            <a href="">www.intocode.com</a>
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright ©2022</p>
      </div>
    </div>
  )
}

export default Footer
