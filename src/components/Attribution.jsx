import { SiJavascript, SiReact } from "react-icons/si";
import { Stack, useTheme } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Attribution = () => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        position: "absolute",
        bottom: "36px",
        left: "42px",
      }}
    >
      Vincent Tao |
      <SiJavascript size={20} style={{ marginLeft: "6px" }} />
      <AddRoundedIcon fontSize={"small"} sx={{ mr: 0.5, ml: 0.5 }} />
      <SiReact size={20} />
    </Stack>
  );
};

export default Attribution;
