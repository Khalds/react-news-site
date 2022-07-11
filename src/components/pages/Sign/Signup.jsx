import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { createUser } from "../../../features/auth/authSlice"

import styles from "./Sign.module.css"

function Signup() {
  const dispatch = useDispatch()

  const error = useSelector((state) => state)

  console.log(error)

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
      dispatch(createUser({ login, password }))

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
        <button onClick={handleSubmit}>register</button>
        <p>
          Have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
