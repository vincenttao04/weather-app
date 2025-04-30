import React from "react";
import ThreeDayIcon from "@mui/icons-material/ViewWeekRounded";
import OneDayIcon from "@mui/icons-material/WebAssetRounded";
import { useTheme } from "@mui/material";

const ViewToggle = ({ view, setView }) => {
  const theme = useTheme();

  const iconConfigs = [
    {
      Icon: OneDayIcon,
      viewType: "one-day",
    },
    {
      Icon: ThreeDayIcon,
      viewType: "three-day",
    },
  ];

  return (
    <div
      className="view-toggle-container"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        outline: "1px solid white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {iconConfigs.map(({ Icon, viewType }) => {
        const ViewIcon = Icon;
        return (
          <ViewIcon
            key={viewType}
            sx={{
              cursor: "pointer",
              color: theme.palette.text.secondary,
              backgroundColor: view === viewType ? "white" : "transparent",
            }}
            onClick={() => setView(viewType)}
          />
        );
      })}
    </div>
  );
};

export default ViewToggle;
