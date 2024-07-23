import React from "react";
import "./SuccessMessage.scss";
import checkIcon from "../assets/images/icon-check.png"; // Đường dẫn đến icon check

const SuccessMessage = ({ show }) => {
  if (!show) return null;
  return (
    <div className="success-message">
      <img src={checkIcon} alt="Success" className="icon" />
      <span>You have successfully submitted!</span>
    </div>
  );
};

export default SuccessMessage;
