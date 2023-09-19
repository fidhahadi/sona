import React from 'react'
import './NavBar.css';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
  } from './NavBarElements';

  const NavBar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/' activeStyle>
              Home Page
            </NavLink>
            <NavLink to="/aboutus" activeStyle>
              About Us
            </NavLink>
            <NavLink to='/products' activeStyle>
              Products
            </NavLink>
            <NavLink to='/distributions' activeStyle>
              Distributions
            </NavLink>
            <NavLink to='/partnerfirms' activeStyle>
              Partner Firms
            </NavLink>
            
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavMenu>
          <NavLink to='/contactus' activeStyle>
              Contact Us : +91 9447 235386
            </NavLink>
          </NavMenu>
          <NavBtn>
            {/* {<NavBtnLink to='/signin'>Sign }In</NavBtnLink> */}
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default NavBar;