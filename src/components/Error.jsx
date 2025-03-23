import React, { useEffect } from "react";
import "../styles/error.css";
import errorIcon from "../assets/icons/error.svg";
import closeIcon from "../assets/icons/close.svg";

const Error = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;

    const timeout = setTimeout(() => {
      onClose();
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="error-container">
      <div className="error-overlay">
        <div className="error-message">
          <img src={errorIcon} className="error-icon" />
          <span>{message}</span>
          <button onClick={onClose} className="close-button">
            <img src={closeIcon} alt="Close" className="close-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
