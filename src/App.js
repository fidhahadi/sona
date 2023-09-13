import React from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./AboutUs/AboutUs";
import Products from './Products/Products';
import HomePage from "./HomePage/HomePage";
import PartnerFirms from "./PartnerFirms/PartnerFirms";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/partnerfirms' element={<PartnerFirms />} />

      </Routes>
    </Router>
  );
}

export default App;
