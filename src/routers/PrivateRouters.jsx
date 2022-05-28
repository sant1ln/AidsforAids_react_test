import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AppContext'

export const PrivateRouters = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user.logged)
  return user.activeUser.logged
        ? children
        : <Navigate to="/signin" />
}
