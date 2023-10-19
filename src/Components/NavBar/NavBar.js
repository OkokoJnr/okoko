import React from 'react';
import {  NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to={'/'} className={`nav-item`}>Okoko</NavLink>
        <ul>
          <li>
            <NavLink to="/" className={`nav-item`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={`nav-item`}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={`nav-item`}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={`nav-item`}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={`nav-item`}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
