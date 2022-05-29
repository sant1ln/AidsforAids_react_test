import React from 'react'
import '../styles/Book.css'

export const Book = ({title,image,price,author,ISBN}) => {

  const NO_IMAGE_DUMMY = 'https://books.google.com.co/googlebooks/images/no_cover_thumb.gif'

  return (
    <article className='book'>
      <img src={(image)?image: NO_IMAGE_DUMMY} alt="" />
      <div className='book_info'>
        <h3>{title}</h3>
        <hr />
        <p>Price - ${price}</p>
        <p>Author - {author}</p>
        <p>ISBN - {ISBN}</p>

        <input type="button" value="Add to cart" />
      </div>
    </article>
  )
}
