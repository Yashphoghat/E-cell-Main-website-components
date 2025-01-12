import React from "react";
import './Navbar.css';
import myImage from './assets/E-cell-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={myImage} alt="E-Cell Logo" className="logo-image" />
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#about" className="nav-link">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
