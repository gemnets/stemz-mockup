import React, { useState } from 'react';
import './Navbar.css';  // Assuming you have a CSS file for the Navbar

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">STEMz Learning</a>
      </div>

      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={toggleMenu}>
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
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </button>

      {/* Menu Items */}
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/online-classes">Online Classes</a></li>
          <li><a href="/self-paced-classes">Self-Paced Classes</a></li>
          <li><a href="/course-boxes">Course Boxes</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/get-involved">Get Involved</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
