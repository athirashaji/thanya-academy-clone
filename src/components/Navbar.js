import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Thanya Academy" height="40" />
        <span className="ms-2 fw-bold">Thanya Academy</span>
      </a>
    </div>
  </nav>
);

export default Navbar;