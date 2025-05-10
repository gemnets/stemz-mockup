import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import stemzLogo from '../assets/stemz-logo.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={stemzLogo} alt="STEMz Learning Logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className="hamburger"
          role="button"
          tabIndex={0}
          onClick={toggleMobileMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleMobileMenu();
            }
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'black' }}
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163
              60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837
              0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837
              0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0
              160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837
              0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>

        {/* Navigation Links */}
        <nav className={`nav ${isMobileMenuOpen ? 'nav--open' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/online-classes" onClick={() => setIsMobileMenuOpen(false)}>Online Classes</Link>
          <Link to="/self-paced-classes" onClick={() => setIsMobileMenuOpen(false)}>Self-Paced Classes</Link>
          <Link to="/course-boxes" onClick={() => setIsMobileMenuOpen(false)}>Course Boxes</Link>
          <Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
          <Link to="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>Get Involved</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
