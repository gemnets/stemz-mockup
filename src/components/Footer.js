import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../components/Footer.css';  


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2025 STEMz Learning</p>
        <div className="footer-icons">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <FaFacebookF /> {/* Correct Facebook icon */}
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
