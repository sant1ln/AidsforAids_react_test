import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AppContext'

export const PrivateRouters = ({ children }) => {
  const { state, dispatch } = useContext(AuthContext);

  return state.logged
        ? children
        : <Navigate to="/signin" />
}
