import React from "react";
import { styled } from "@mui/material/styles";
import "../styles/theme-toggle.css";
import Switch from "@mui/material/Switch";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useTheme } from "@mui/material";

const ThemeToggle = ({ checked, onChange }) => {
  const theme = useTheme();

  const CustomSwitch = styled(Switch)({
    "& .MuiSwitch-switchBase": {
      padding: 4, // Default: 9
      transform: "translateX(5px) translateY(5px)", // Adjust translation for the unchecked state
      "&.Mui-checked": {
        transform: "translateX(25px) translateY(5px)", // Adjust translation for checked state
      },
    },
  });

  return (
    <CustomSwitch
      className="theme-toggle-switch"
      checked={checked}
      color="default"
      onChange={onChange}
      icon={
        <LightModeRoundedIcon
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
