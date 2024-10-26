import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.jpg';
import './H1.css';

function Header({ loginStatus }) {
  return (
    <div className='heading'>
      <header className='header'>
        <div className='logo-container'>
          <img src={logo1} alt="Logo" width={75} className='mx-3 rounded-circle' />
        </div>
        <nav className='nav'>
          <ul className='nav-list'>
            <li className="nav-item ml-2">
              <Link to="" className='nav-link' style={{ color: 'rgb(60, 87, 12)' }} aria-label="Home">Home</Link>
            </li>
            <li className="nav-item ml-2">
              <Link to="donate" className='nav-link' style={{ color: 'rgb(60, 87, 12)' }} aria-label="Donate Fund">Donate Fund</Link>
            </li>
            {loginStatus===false ? (
             
               <li className="nav-item">
               <Link to="login" className='nav-link' style={{ color: 'rgb(60, 87, 12)' }} aria-label="Login">Login</Link>
             </li>
            ) : (
              <li className="nav-item">
                <Link to="UserProfile" className='nav-link' style={{ color: 'rgb(60, 87, 12)' }} aria-label="Profile">Profile</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
