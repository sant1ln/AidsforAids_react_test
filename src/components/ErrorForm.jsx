import React from 'react'
import '../styles/ErrorForm.css' 

export const ErrorForm = ({message}) => {
  return (
    <article className="error_message">{message}</article>
  )
}
