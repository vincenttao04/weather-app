import React, { useState } from "react";
import Weather from "./components/Weather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = (event) => {
    setIsDarkMode(event.target.checked);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b3b3b3",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
      text: {
        primary: "#121212",
        secondary: "#666666",
      },
    },
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="app">
        <Weather
          isDarkMode={isDarkMode}
          handleThemeChange={handleThemeChange}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
