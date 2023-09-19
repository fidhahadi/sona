import React from "react";
import NavBar1 from "./components/NavBar/NavBar1";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./components/AboutUs/AboutUs";
import Products from './components/Products/Products';
import HomePage from "./components/HomePage/HomePage";
import PartnerFirms from "./components/PartnerFirms/PartnerFirms";
import ContactUs from "./components/ContactUs/ContactUs";
import './App.css';



function App() {
  return (<>    <Router>
    <NavBar1 />
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/products' element={<Products />} />
      <Route path='/partnerfirms' element={<PartnerFirms />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  </Router>
    <a
      href="https://wa.me/918075868738"
      class="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa fa-whatsapp whatsapp-icon"></i>
    </a>

  </>
  );
}

export default App;
