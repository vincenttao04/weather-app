import React, { useEffect } from "react";
import "../styles/error.css";
import { Alert, AlertTitle, Box } from "@mui/material";

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
    <Box
      sx={{
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: "auto",
        maxWidth: "30%",
      }}
    >
      <Alert severity="error" onClose={onClose} className="alert">
        <AlertTitle className="alert-title">Error</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
};

export default Error;
