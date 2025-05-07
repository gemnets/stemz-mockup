import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          STEMz Learning
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
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
