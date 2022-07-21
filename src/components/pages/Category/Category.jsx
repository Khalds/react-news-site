import React from "react"
import { Link } from "react-router-dom"


function Category({ cat }) {
  return (
    <>
      <Link to={`/news/category/${cat._id}`}>{cat.name}</Link>
    </>
  )
}

export default Category
