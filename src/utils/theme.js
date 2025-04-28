import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
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

export const lightTheme = createTheme({
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
