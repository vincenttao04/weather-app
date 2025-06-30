// React import
import { useEffect } from "react";

// External library imports
import { Alert, Box, useTheme } from "@mui/material";

const Error = ({ message, onClose }) => {
  const theme = useTheme();

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
        top: "30px",
        right: "40px",
        zIndex: 1000,
        width: "auto",
        maxWidth: "35%",
      }}
    >
      <Alert
        severity="error"
        onClose={onClose}
        className="alert"
        sx={{
          borderRadius: "24px",
          height: "auto",
          backgroundColor:
            theme.palette.mode === "dark" ? "#391c1e" : "#f6c9ca",
        }}
      >
        {message}
      </Alert>
    </Box>
  );
};

export default Error;
