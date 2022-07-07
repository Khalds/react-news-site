import React from "react"

import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inf}>
        <div className={styles.footer_logo}>
          <h1>The Intocode News</h1>
        </div>
        <div className={styles.category}>
          <ul>
            <li>
              <a href="">Finance</a>
            </li>
            <li>
              <a href="">Politics</a>
            </li>
            <li>
              <a href="">Health</a>
            </li>
            <li>
              <a href="">Travel</a>
            </li>
            <li>
              <a href="">Sports</a>
            </li>
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
