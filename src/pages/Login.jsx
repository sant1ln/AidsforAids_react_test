import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ErrorForm } from '../components/ErrorForm';
import { validateUser } from '../services/validateLogin';
import { login } from '../store/actions/auth.actions';
import { AuthContext } from '../store/AppContext';
import '../styles/Login.css'

export const Login = () => {
  const [errorForm, setErrorForm] = useState({error:false,message:null})
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    validateUser(user, data)
      .then(() => {
        dispatch(login(data))
        navigate('/')
      })
      .catch((error)=>setErrorForm({error:true,message:error}) )
  }

  return (
    <section className='login'>
      <h1>
        The Little Store
      </h1>
      <h2>Login</h2>
      <form className='login_form' ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="email" className='login_input'>
          <span>Email</span>
          <input type="text" name="email" />
        </label>

        <label htmlFor="password" className='login_input'>
          <span>Password</span>
          <input type="text" name="password" />
        </label>

        <button className='login_submit'>Login</button>
        <Link className='invite' to="/signin">don't have an account? sign up here</Link>
      </form>
      {
        (errorForm.error) && <ErrorForm message={errorForm.message} />
      }

    </section>
  )
}
