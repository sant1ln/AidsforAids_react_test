import React from 'react'
import { Navigate } from 'react-router-dom';

export const PublicRouters = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.activeUser.logged
    ? <Navigate to="/" />
    : children
}

