import React from "react";
import "../styles/theme-toggle.css";
import Switch from "@mui/material/Switch";

const ThemeToggle = ({ checked, onChange }) => {
  return (
    <Switch
      className="theme-toggle-switch"
      checked={checked}
      color="default"
      onChange={onChange}
    />
  );
};

export default ThemeToggle;
