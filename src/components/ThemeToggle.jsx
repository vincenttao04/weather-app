// External library imports
import { Stack, Switch, useTheme } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        position: "absolute",
        bottom: "30px",
        right: "40px",
      }}
    >
      <LightModeIcon sx={{ color: theme.palette.text.secondary }} />
      <Switch
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
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
      <DarkModeIcon sx={{ color: theme.palette.text.secondary }} />
    </Stack>
  );
};

export default ThemeToggle;
