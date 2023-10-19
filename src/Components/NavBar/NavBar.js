import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <React.Fragment>
            <div>
      <nav className='navbar'>
        <h2><NavLink to={'/'} className={`nav-item`}>Okoko</NavLink></h2>
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
    <Outlet/>
    </React.Fragment>
  );
}

export default NavBar;
