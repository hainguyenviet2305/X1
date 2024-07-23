import React from 'react';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <span className="menu-text">Blog</span>
      </div>
      <div className="menu-item">
        <span className="menu-text">FAQ</span>
      </div>
      <div className="menu-item">
        <span className="menu-text">About us</span>
      </div>
    </div>
  );
};

export default Menu;