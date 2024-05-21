import React from 'react';
import './side-navbar.css';
import { Link } from 'react-router-dom';
const SideNavbar = () => {
    return ( <>
    <ul className="nav flex-column">
  <li className="nav-item">
    <Link to='/'>
    <i className="fa-solid fa-house icon"></i>
    <h2>Home</h2>
    </Link>
  </li>
  <li className="nav-item">
  <a href='#'>
    <i className="fa-solid fa-fire icon"></i>
    <h2>Trending</h2>
    </a>
  </li>
  <li className="nav-item">
    <Link to='/explore'>
    <i className="fa-regular fa-compass icon"></i>
    <h2>Explore</h2>
    </Link>
  </li>
  <li className="nav-item">
    <Link to='/movies'>
    <i className="fa-solid fa-tv icon"></i>
    <h2>Movies</h2>
    </Link>
  </li>
  <li className="nav-item">
  <Link to='/favorites'>
  <i className="fa-regular fa-heart icon"></i>
    <h2>Likes</h2>
    </Link>
  </li>
 
</ul>
    </> );
}
 
export default SideNavbar;