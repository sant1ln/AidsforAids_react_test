import React, { useContext, useEffect } from 'react'
import { Book } from '../components/Book'
import { getBooks } from '../services/getBooks'
import { loadBooks } from '../store/actions/book.action'
import { BooksContext } from '../store/AppContext'
import '../styles/Home.css'

export const Home = () => {

  const { state: { books }, dispatch } = useContext(BooksContext);

  useEffect(() => {
    getBooks()
      .then((data) => dispatch(loadBooks(data)))
  }, [])

  
  console.log(books[7]?.industryIdentifiers[0].identifier)

  return (
    <main className="books_container">
      <section className='books_list'>
        {
          books.map((book, index) => (
            <Book 
              key={index} 
              title={book?.title}
              price={book?.pageCount}
              author={book?.authors}
              image={book?.imageLinks?.smallThumbnail}
              ISBN={book?.industryIdentifiers[0].identifier}
            />
          ))
        }
      </section>

    </main>
  )
}
