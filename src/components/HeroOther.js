import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/online-classes">Online Classes</Link>
        <Link to="/self-paced-classes">Self-Paced Classes</Link>
        <Link to="/course-boxes">Course Boxes</Link>
        <Link to="/news">News</Link>
        <Link to="/get-involved">Get Involved</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;
