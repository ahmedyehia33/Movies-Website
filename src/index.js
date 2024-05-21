import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import '@fortawesome/fontawesome-free/css/all.css';


//import Navbar from './pages/navbar/TopNav';
//import SideNavbar from './pages/Side-Navbar/sideNavbar';
import Website from './Website';
//import Swipper from './swipper';
//import Trying from './trying/trying';
import Navbar2 from './pages/navbar/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Website/>
 
);


