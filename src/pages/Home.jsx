import React, { useEffect } from 'react'
import { getBooks } from '../services/getBooks'

export const Home = () => {
  

  useEffect(() => {
    getBooks()
    .then((data)=>console.log(data))
  }, [])

  return (
    <div>Home</div>
  )
}
