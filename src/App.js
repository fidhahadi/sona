import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./components/AboutUs/AboutUs";
import Products from './components/Products/Products';
import HomePage from "./components/HomePage/HomePage";
import PartnerFirms from "./components/PartnerFirms/PartnerFirms";



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
