import React from "react";
import "../styles/theme-toggle.css";
import Switch from "@mui/material/Switch";

const ThemeToggle = ({ onChange }) => {
  return (
    <Switch
      className="theme-toggle-switch"
      defaultChecked
      color="default"
      onChange={onChange}
    />
  );
};

export default ThemeToggle;
