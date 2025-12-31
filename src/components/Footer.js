import React from 'react';
import { Link } from 'react-router-dom';  // Yeh import add karo
import { 
  FaFacebookF as FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/products" className="footer-link">All Products</Link></li>
            <li><Link to="/products" className="footer-link">New Arrivals</Link></li>
            <li><Link to="/products" className="footer-link">Best Sellers</Link></li>
            <li><Link to="/products" className="footer-link">Special Offers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><Link to="/contact" className="footer-link">Customer Service</Link></li>
            <li><Link to="/contact" className="footer-link">Shipping Info</Link></li>
            <li><Link to="/contact" className="footer-link">Returns & Exchanges</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><Link to="/about" className="footer-link">Our Story</Link></li>
            <li><Link to="/about" className="footer-link">Careers</Link></li>
            <li><Link to="/about" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/about" className="footer-link">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
          <p style={{ marginTop: '15px', color: '#bdc3c7', fontSize: '0.9rem' }}>
            Subscribe to our newsletter for updates on new products and exclusive offers.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 MobileShop. All rights reserved. | Designed for mobile shopping</p>
      </div>
    </footer>
  );
};

export default Footer;