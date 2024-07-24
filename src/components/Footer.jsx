import React from 'react';
import './Footer.scss';
import logo from '../assets/images/Header.png'; // Đường dẫn đến logo của bạn
import facebookIcon from '../assets/images/facebook.png'; // Đường dẫn đến icon Facebook
import twitterIcon from '../assets/images/twitter.png'; // Đường dẫn đến icon Twitter
import youtubeIcon from '../assets/images/youtube.png'; // Đường dẫn đến icon YouTube
import linkedinIcon from '../assets/images/linkedin.png'; // Đường dẫn đến icon LinkedIn

const Footer = () => {
  return (
    <footer className="row footer">
      <h1>DISCOVER THE WORLD </h1>
      <h1>WITHIN YOU</h1>
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-social">
        
          <img src={facebookIcon} alt="Facebook" />
      
          <img src={twitterIcon} alt="Twitter" />

          <img src={youtubeIcon} alt="YouTube" />


          <img src={linkedinIcon} alt="LinkedIn" />
      </div>
      <div className="footer-bottom">
        <p>Copyrights 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;