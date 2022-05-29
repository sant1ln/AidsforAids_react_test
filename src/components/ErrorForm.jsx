import React from 'react'
import '../styles/ErrorForm.css' 

export const ErrorForm = ({message}) => {
  return (
    <artilce className="error_message">{message}</artilce>
  )
}
