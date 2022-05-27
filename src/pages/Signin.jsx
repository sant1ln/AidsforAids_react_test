import React from 'react'
import '../styles/Signin.css'
import bannerImage from '../assets/signin_invite.svg'

export const Signin = () => {
  return (
    <section className='signin'>
      <section className='signin_banner'>
          <h2>
            The Little Store  
          </h2>
          <p>Where you can buy that what you've been dreaming of</p>

          <img src={bannerImage} alt="Banner image" />
      </section>
      <section className='signin_form'></section>
    </section>
  )
}
