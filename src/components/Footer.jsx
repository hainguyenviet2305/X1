import React from 'react';
import './Footer.scss';
import logo from '../assets/images/Header.png'; // Đường dẫn đến logo của bạn
import facebookIcon from '../assets/images/facebook.png'; // Đường dẫn đến icon Facebook
import twitterIcon from '../assets/images/twitter.png'; // Đường dẫn đến icon Twitter
import youtubeIcon from '../assets/images/youtube.png'; // Đường dẫn đến icon YouTube
import linkedinIcon from '../assets/images/linkedin.png'; // Đường dẫn đến icon LinkedIn

const Footer = () => {
  return (
<footer className="footer text-white py-4">
      <div className="container text-center">
        <h1 className="display-4">DISCOVER THE WORLD</h1>
        <h1 className="display-4">WITHIN YOU</h1>
        <div className="footer-logo my-4">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
        <div className="footer-social my-4 d-flex justify-content-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={facebookIcon} alt="Facebook" className="img-fluid" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={twitterIcon} alt="Twitter" className="img-fluid" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={youtubeIcon} alt="YouTube" className="img-fluid" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={linkedinIcon} alt="LinkedIn" className="img-fluid" />
          </a>
        </div>
        <div className="footer-bottom">
          <p className="mb-0">Copyrights 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;