import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from '../pages/Login';
import { Signin } from '../pages/Signin';
import { MainRouter } from './MainRouter';
import { PrivateRouters } from './PrivateRouters';

export const AppRouter = () => {
  return (
    <>      
      <Router>
            <Routes>              
              <Route path="login" element={<Login />} />
              <Route path="signin" element={<Signin />} />
              <Route path="/*" element={
                <PrivateRouters>
                  <MainRouter />
                </PrivateRouters>
              }/>     
              
            </Routes>
        </Router>
    </>
  )
}
