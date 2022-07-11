import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { auth } from "../../../features/auth/authSlice"

import styles from "./Sign.module.css"

function Signin() {
  const dispatch = useDispatch()

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (login !== "" && password !== "") {
      dispatch(auth({ login, password }))

      setLogin("")
      setPassword("")
    } else {
    }
  }

  return (
    <div className={styles.Sign}>
      <div className={styles.wrapper}>
        <span className={styles.close}>
          <Link to="/">x</Link>
        </span>
        <h1>The Intocode News</h1>
        <input
          type="text"
          placeholder="login"
          value={login}
          onChange={handleChangeLogin}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button onClick={handleSubmit}>sign in</button>
        <p>
          Don't have an account yet? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Signin
