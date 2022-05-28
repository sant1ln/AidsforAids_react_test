import React from 'react'
import { Navigate } from 'react-router-dom';

export const PublicRouters = ({ children }) => {
  const { state, dispatch } = useContext(AuthContext);

  return state.logged
    ? <Navigate to="/" />
    : children
}

