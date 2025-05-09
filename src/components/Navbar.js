import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); // Toggles the menu open/close
  const closeMobileMenu = () => setClick(false); // Closes the menu

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          STEMz Learning
        </Link>

        {/* Custom Hamburger Menu */}
        <div
          className="hamburger"
          onClick={handleClick}
          role="button"
          tabIndex="0"
          aria-label="Toggle Menu"
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'black' }}>
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>

        {/* Nav links - visible on desktop and toggled on mobile */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/online-classes" className="nav-links" onClick={closeMobileMenu}>
              Online Classes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/self-paced-classes" className="nav-links" onClick={closeMobileMenu}>
              Self-Paced Classes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/course-boxes" className="nav-links" onClick={closeMobileMenu}>
              Course Boxes
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://substack.com/@STEMZLEARNING" className="nav-links" onClick={closeMobileMenu}>
              News
            </a>
          </li>
          <li className="nav-item">
            <Link to="/get-involved" className="nav-links" onClick={closeMobileMenu}>
              Get Involved
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
