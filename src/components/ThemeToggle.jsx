import React from "react";
import "../styles/theme-toggle.css";
import Switch from "@mui/material/Switch";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { Stack, useTheme } from "@mui/material";

const ThemeToggle = ({ checked, onChange }) => {
  const theme = useTheme();

  return (
    <Stack
      className="theme-toggle-switch"
      direction="row"
      sx={{ alignItems: "center" }}
    >
      <LightModeRoundedIcon sx={{ color: theme.palette.text.secondary }} />
      <Switch
        checked={checked}
        onChange={onChange}
        sx={{
          // Checked and unchecked state's track
          ["& .MuiSwitch-track, & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track"]:
            {
              backgroundColor: `${theme.palette.background.paper} !important`,
              opacity: 1,
            },
          // Button profile
          "& .MuiSwitch-thumb": {
            backgroundColor: theme.palette.text.secondary,
          },
        }}
      />
      <DarkModeRoundedIcon sx={{ color: theme.palette.text.secondary }} />
    </Stack>
  );
};

export default ThemeToggle;
