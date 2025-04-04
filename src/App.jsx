import React, { useState } from "react";
import Weather from "./components/Weather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = (event) => {
    setIsDarkMode(event.target.checked);
  };

  // og background colour: #212121

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#222222", // app background
        paper: "#222222", // paper colour background
        textfield: "#556067",
      },
      text: {
        primary: "#faf7ff", //ffffff
        secondary: "#ff00dc", //#b3b3b3
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
        default: "#f5f5f5", // app background
        paper: "#ffffff", // paper colour background
        textfield: "#00ff13",
      },
      text: {
        primary: "#ff00dc", //121212
        secondary: "#00ff13", //666666
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
