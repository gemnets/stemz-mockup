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
          <Link to="/about">About Us</Link>
          <Link to="/online-classes">Online Classes</Link>
          <Link to="/self-paced-classes">Self-Paced Classes</Link>
          <Link to="/course-boxes">Course Boxes</Link>
          <Link to="/news">News</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
