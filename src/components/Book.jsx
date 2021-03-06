import React, { useContext, useRef, useState } from 'react'
import { addToCart, removeFromCart } from '../store/actions/book.action'
import { BooksContext } from '../store/AppContext'
import '../styles/Book.css'

export const Book = ({ title, image, price, author, ISBN }) => {

  const { dispatch } = useContext(BooksContext);
  const [added, setAdded] = useState(false)
  const amountRef = useRef(0)
  const NO_IMAGE_DUMMY = 'https://books.google.com.co/googlebooks/images/no_cover_thumb.gif';

  const handleAddToCart = () => {
    let amount = amountRef.current.value;
    dispatch(addToCart({ title, image, price, author, ISBN,amount }))
    setAdded(true)
  }

  const handleRemoveToCart = (id) => {
    dispatch(removeFromCart(id))
    setAdded(false)
  }

  return (
    <article className='book'>
      <img className='book_image' src={(image) ? image : NO_IMAGE_DUMMY} alt="" />
      <div className='book_info'>
        <h3>{title}</h3>
        <hr />
        <p>Price - ${price}</p>
        <p>Author - {author}</p>
        <p>ISBN - {ISBN}</p>

        <label htmlFor="amount">
          <span>Amount</span>
          <input ref={amountRef} className='amount_input' type="number" name="amount" id="amount" />
        </label>

        {
          (added)
            ? <input className='input_add added' type="button" value='Remove to cart' onClick={() => handleRemoveToCart(ISBN)} />
            : <input  className='input_add' type="button" value='add to cart' onClick={() => handleAddToCart()} />
        }
      </div>
    </article>
  )
}
