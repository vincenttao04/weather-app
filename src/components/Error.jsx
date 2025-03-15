import React from "react";
import "../styles/error.css";

const Error = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="error-message">
      <span>{message}</span>
      <button onClick={onClose} className="close-button">
        X
      </button>
    </div>
  );
};

export default Error;
