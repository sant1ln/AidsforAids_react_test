import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

export const Login = () => {
  return (
    <section className='login'>
      <h1>Login</h1>
      <form className='login_form'>
        <label htmlFor="email" className='login_input'>
          <span>Email</span>
          <input type="text" name="email" />
        </label>

        <label htmlFor="password" className='login_input'>
          <span>Password</span>
          <input type="password" name="password" />
        </label>

        <button className='login_submit'>Login</button>
        <Link className='invite'  to="/signin">don't have an account? sign up here</Link>
      </form>

    </section>
  )
}
