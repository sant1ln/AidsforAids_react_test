import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { About } from '../pages/About';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';

export const MainRouter = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
