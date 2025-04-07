import React from "react";
import "../styles/theme-toggle.css";
import Switch from "@mui/material/Switch";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useTheme } from "@mui/material";

const ThemeToggle = ({ checked, onChange }) => {
  const theme = useTheme();

  return (
    <Switch
      className="theme-toggle-switch"
      checked={checked}
      color="default"
      onChange={onChange}
      icon={
        <LightModeRoundedIcon
          className="light-mode"
          style={{
            width: "20px",
            height: "20px",
            transform: "scale(1.1)",
            fill: theme.palette.text.primary,
            // backgroundColor: theme.palette.text.secondary,
          }}
        />
      }
      checkedIcon={
        <DarkModeRoundedIcon
          className="dark-mode"
          style={{
            width: "20px",
            height: "20px",
            transform: "scale(1.1)",
            fill: theme.palette.text.primary,
            // backgroundColor: theme.palette.text.secondary,
          }}
        />
      }
    />
  );
};

export default ThemeToggle;
