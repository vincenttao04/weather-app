import React from "react";
import Switch from "@mui/material/Switch";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { Stack, useTheme } from "@mui/material";

const ThemeToggle = ({ checked, onChange }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        position: "absolute",
        bottom: "20px",
        right: "20px",
      }}
    >
      <LightModeRoundedIcon sx={{ color: theme.palette.text.secondary }} />
      <Switch
        checked={checked}
        onChange={onChange}
        sx={{
          "& .MuiSwitch-track, & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
            {
              backgroundColor: theme.palette.background.paper,
              opacity: 1,
            },
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
