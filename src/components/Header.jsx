import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.jpg';
import './H1.css';

function Header({ loginStatus }) {
  return (
    <div className='heading' >
    <header className='header '>
      <div className='logo-container'>
        <img src={logo1} alt="logo" width={75} className='mx-3 rounded-circle'/>
        <h1>NOURISHNET</h1>
      </div>
      <nav className='nav'>
        <ul className='nav-list' >
          <li className="nav-item ml-2">
            <Link to="" className='nav-link ' style={{  color: 'rgb(60, 87, 12)'}}>Home</Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="donate" className='nav-link ' style={{color: 'rgb(60, 87, 12)'}}>Donate Fund</Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="map" className='nav-link rounded' style={{color:'rgb(60, 87, 12)'}}>Locations</Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="login" className='nav-link rounded' style={{color:'white',backgroundColor:' #f0a500'}}>Login</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  </div>
   
  )
}

export default Header;
