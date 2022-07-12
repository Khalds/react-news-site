import React from "react"
import { useSelector } from "react-redux"

function Category() {
  const catigories = useSelector((state) => state.news.category)

  return (
    <>
      {catigories.map((cat) => {
        return (
          <li>
            <a href="">{cat.name}</a>
          </li>
        )
      })}
    </>
  )
}

export default Category
