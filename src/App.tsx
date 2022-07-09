import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Features from './Components/Features/Features';
import Packages from './Components/Packages/Packages';
import ContactUs from './Components/ContactUs/ContactUs';
import RecentProperty from './Components/RecentProperty/RecentProperty';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services" element={<Features />} />
        <Route path="pricing" element={<Packages />} />
        <Route path="services" element={<Features />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="property" element={<RecentProperty />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
