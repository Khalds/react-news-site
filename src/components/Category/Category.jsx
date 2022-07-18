import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchCategory } from "../../features/category/categorySlice"

function Category() {
  const catigories = useSelector((state) => state.cat.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  return (
    <>
      {catigories
        .map((cat) => {
          return (
            <li key={cat._id}>
              <Link to={`/news/category/${cat._id}`}>{cat.name}</Link>
            </li>
          )
        })
        .slice(0, 6)}
    </>
  )
}

export default Category
