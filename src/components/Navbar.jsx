import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { signout } from '../store/actions/auth.actions'
import { AuthContext } from '../store/AppContext'
import '../styles/Navbar.css'

export const Navbar = () => {

  const {dispatch} = useContext(AuthContext)

  return (
    <header className='header'>

      <div className='header_title'>
        <span>The Little Store</span>
      </div>

      <nav className='nav_container'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login" onClick={()=>dispatch(signout())}>Sign out</Link>
      </nav>
    </header>
  )
}
