import React, { useContext, useRef } from 'react'
import '../styles/Signin.css'
import bannerImage from '../assets/signin_invite.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../store/AppContext'
import { createUser } from '../store/actions/auth.actions'

export const Signin = () => {
  
  const formRef = useRef();
  const {user,dispatch} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    dispatch(createUser(data))
  }

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
        <h2>Sign in</h2>
      <form className='signin_form' ref={formRef} onSubmit={handleSubmit}>

        <label htmlFor="name" className='signin_input'>
          <span>Name</span>
          <input type="text" name="name" defaultValue="Santiago"/>
        </label>

        <label htmlFor="email" className='signin_input'>
          <span>Email</span>
          <input type="text" name="email" defaultValue="react@js.com" />
        </label>

        <label htmlFor="password" className='signin_input'>
          <span>Password</span>
          <input type="password" name="password" defaultValue="let_it_be" />
        </label>

        <button className='signin_submit'>Signin</button>
        <Link className='invite'  to="/login">Do you already have an account? log in here</Link>
      </form>

      </section>
    </section>
  )
}
