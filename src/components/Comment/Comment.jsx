import React from "react"

import styles from "./Comment.module.css"

function Comment({ coms, idx }) {
  return (
    <div key={idx} className={styles.com_item}>
      <div className={styles.user_name}>{coms.user.login}</div>
      <div className={styles.user_text}>{coms.text}</div>
    </div>
  )
}

export default Comment
