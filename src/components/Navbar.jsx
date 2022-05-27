import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <header className='header'>

      <div className='header_title'>
        <span>The Little Store</span>
      </div>

      <nav className='nav_container'>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Sign out</Link>
      </nav>
    </header>
  )
}
