import React from 'react'
import '../styles/Signin.css'
import bannerImage from '../assets/signin_invite.svg'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
    <section className='signin_container'>
      <section className='signin_banner'>
          <h2>
            The Little Store  
          </h2>
          <p>Where you can buy that what you've been dreaming of</p>

          <img src={bannerImage} alt="Banner image" />
      </section>
      <section className='signin'>
        <h2>Sign in!</h2>
      <form className='signin_form'>

        <label htmlFor="name" className='signin_input'>
          <span>Name</span>
          <input type="text" name="name" />
        </label>


        <label htmlFor="email" className='signin_input'>
          <span>Email</span>
          <input type="text" name="email" />
        </label>

        <label htmlFor="password" className='signin_input'>
          <span>Password</span>
          <input type="password" name="password" />
        </label>

        <label htmlFor="password_check" className='signin_input'>
          <span>Check Password</span>
          <input type="password" name="password_check" />
        </label>

        <button className='signin_submit'>Signin</button>
        <Link className='invite'  to="/signin">Do you already have an account? log in here</Link>
      </form>

      </section>
    </section>
  )
}
