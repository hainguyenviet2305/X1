import React from 'react';
import './CustomButton.css';


const CustomButton = ({ onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <span className="arrow">→</span>
    </button>
  );
};

export default CustomButton;