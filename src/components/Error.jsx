import React, { useEffect } from "react";
// import "../styles/error.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Box } from "@mui/material";

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
        minWidth: "300px",
      }}
    >
      <Alert severity="error" onClose={onClose}>
        This is a success Alert with an encouraging title.
      </Alert>
    </Box>
  );
};

export default Error;
