import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

 const Navbar = () => {
    return ( 
    <div className="nav-container">
        <Link to='/'><div className="logo"> Movies<span className='logo-box'>Box</span></div></Link>
        <div className="right-side">
        <div className="search-area"><input className="search-input" type="search" placeholder="Search" aria-label="Search" />
      <a href='#'><i className="fa-solid fa-magnifying-glass glass"></i></a></div>
        <div className="user-image">  <a href='#'> <img src="https://img.freepik.com/premium-vector/expresse-gestures-boy-vector-scene-vector-design-cheerful-kid_772298-35074.jpg?w=740"/></a></div>
        </div>
    </div> );
 }
  
 export default Navbar;