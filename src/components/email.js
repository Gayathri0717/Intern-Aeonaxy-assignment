
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaSearch, FaShoppingCart, FaUpload, FaEnvelope, FaBell, FaGlobe, FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'; // Import necessary icons
import './email.css';
import { useLocation } from 'react-router-dom';
const Email = () => {
  const location = useLocation();
  const avatarImage = location.state && location.state.avatarImage;
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='container2'>
      <header className="header1">
        <div className="header-content1">
          <h1 className="logo">dribbble</h1>
          <nav className={`navigation-links ${showMenu ? 'active' : ''}`}>
            <a href="#">Inspiration</a>
            <a href="#">Find Work</a>
            <a href="#">Learn Design</a>
            <a href="#">Go Pro</a>
            <a href="#">Hire Designer</a>
          </nav>
          <div className="header-actions1">
            <div className="menu-icon" onClick={toggleMenu}>
              {showMenu ? <FaTimes className="icon close-icon active" /> : <FaBars className="icon" />}
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <FaSearch className="search-icon" />
            </div>
            <FaShoppingCart className="icon bucket-icon" />
            <div className="avatar2">
              {avatarImage && <img src={avatarImage} alt="Avatar" />}
            </div>
            <button className="upload-button">
              <FaUpload className="icon" /> Upload
            </button>
          </div>
        </div>
      </header>
      <div className="verify-email">
        <h1>Please verify your Email</h1>
        <div className="notification">
          <FaEnvelope className="envelope" />
          <span>1</span>
        </div>
        <p>Please verify your email address to confirm that it's you.</p>
        <p className="email">accountinfo@gmail.com</p>
        <p>Click the link in the email we sent you.</p>
        <p>Didn't receive the email? Check your spam folder.</p>
        <p className="change-email">Wrong email address? <a href="#">Change it</a></p>
      </div>
      <footer className="footer">
        <div className="footer-section1">
          <h2>dribbble</h2>
          <p>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
          <div className="social-icons">
            <FaGlobe />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>
        <div className="footer-section2">
          <h3>For Designers</h3>
          <ul>
            <li>Go Pro</li>
            <li>Explore design Work</li>
            <li>Design Blog</li>
            <li>Overtime Podcast</li>
            <li>Playoffs</li>
            <li>Weekly Warm-Up</li>
            <li>Refer</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
        <div className="footer-section3">
          <h3>Hire designers</h3>
          <ul>
            <li>Post  a job opening</li>
            <li>Post a freelance project</li>
            <li>Search for designers</li>
            <li>Brands</li>
            <li>Advertise with us</li>

          </ul>
        </div>
        <div className="footer-section4">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Media kit</li>
            <li>Testimonials</li>
            <li>API</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="footer-section5">
          <h3>Directories</h3>
          <ul>
            <li>Design jobs</li>
            <li>Desginers for hire</li>
            <li>freelance desginers for hire</li>
            <li>Tagst</li>
            <li>Places</li>
            <li>Design assests</li>
            <li>Dribbble Marketplace </li>
            <li>Creative Market</li>
            <li> Fontspring</li>
            <li>FOnt Squirrel</li>
          </ul>
        </div>
        <div className="footer-section6">
          <h3>Design Resources</h3>
          <ul>
            <li>freelancing</li>
            <li>Design Hiring</li>
            <li>Design Portfolio</li>
            <li>Design Education</li>
            <li>Creative Process</li>
            <li>Design Industry Trends</li>

          </ul>
        </div>

      </footer>
      <p className='last'>2023 Dribbble. All right reserved</p>
    </div>
  );
};

export default Email;


