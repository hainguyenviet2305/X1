import React from 'react';
import './CustomButton.css';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail');
  }
  return (
    <button className="custom-button" onClick={handleClick}>
      <span className="arrow">→</span>
    </button>
  );
};

export default CustomButton;