import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

export const MainRouter = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="about" element={<About />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
