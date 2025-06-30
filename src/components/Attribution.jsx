import { SiJavascript, SiReact } from "react-icons/si";
import { Stack, useTheme } from "@mui/material";

const Attribution = () => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        position: "absolute",
        bottom: "36px",
        left: "42px",
        color: theme.palette.text.secondary,
      }}
    >
      <p>Vincent Tao |</p>
      <SiJavascript size={20} style={{ marginLeft: "6px" }} />
      {/* <AddRoundedIcon fontSize={"small"} sx={{ mr: 0.5, ml: 0.5 }} /> */}
      <p style={{ padding: "0px 4px", fontSize: "22px" }}>+</p>
      <SiReact size={20} />
    </Stack>
  );
};

export default Attribution;
