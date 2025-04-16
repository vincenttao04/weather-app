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
        paper: "#282828",
        textfield: "#282828",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0b692",
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#ffffff",
        paper: "#f0f0f0",
        textfield: "#f0f0f0",
      },
      text: {
        primary: "#000000",
        secondary: "#448289",
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
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
