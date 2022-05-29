import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home';

export const MainRouter = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
