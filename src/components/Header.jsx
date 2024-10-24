import React from 'react'
import {Link} from 'react-router-dom'
import logo1 from '../assets/logo1.jpg'
import './H1.css'
function Header() {
  return (
    <div className='bg-light'>
    <header className='header'>
      <div className='logo-container'>
        <img src={logo1} alt="logo" width={75} className='mx-3 rounded-circle'/>
      </div>
      <nav className='nav'>
        <ul className='nav-list' >
          <li className="nav-item ml-2">
            <Link to="" className='nav-link text-black'>Home</Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="register" className='nav-link text-black'>Register</Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="login" className='nav-link text-black'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
   
  )
}

export default Header