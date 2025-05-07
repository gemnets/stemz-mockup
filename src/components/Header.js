import React from 'react';
import { Link } from 'react-router-dom';
import stemzLogo from '../assets/stemz-logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={stemzLogo} alt="STEMz Learning Logo" />
          <span>STEMz Learning</span>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="#">About Us</a>
          <a href="#">Online Classes</a>
          <a href="#">Self-Paced Classes</a>
          <a href="#">Course Boxes</a>
          <a href="#">News</a>
          <a href="#">Get Involved</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
