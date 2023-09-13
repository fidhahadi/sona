import React from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./AboutUs/AboutUs";
import Products from './Products/Products';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />

      </Routes>
    </Router>
  );
}

export default App;
