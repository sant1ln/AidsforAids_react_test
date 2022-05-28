import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from '../pages/Login';
import { Signin } from '../pages/Signin';
import { BooksContext } from '../store/AppContext';
import { bookReducer } from '../store/reducers/book.reducer';
import { bookInitialState } from '../store/state/book.initialState';
import { MainRouter } from './MainRouter';
import { PrivateRouters } from './PrivateRouters';

export const AppRouter = () => {

  const [state,dispatch] = useReducer(bookReducer, bookInitialState)

  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/*" element={
            <PrivateRouters>
              <BooksContext.Provider value={{state,dispatch}}>
                <MainRouter />
              </BooksContext.Provider>
            </PrivateRouters>
          } />

        </Routes>
      </Router>
    </>
  )
}
