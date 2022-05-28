import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AppContext'

export const PrivateRouters = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user.activeUser.logged
        ? children
        : <Navigate to="/signin" />
}
