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
        padding: "10px 14px",
        borderRadius: "28px",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {iconConfigs.map(({ Icon, viewType }) => {
        const ViewIcon = Icon;
        return (
          <ViewIcon
            key={viewType}
            sx={{
              cursor: "pointer",
              color:
                view === viewType
                  ? theme.palette.text.secondary
                  : theme.palette.background.default,
            }}
            onClick={() => setView(viewType)}
          />
        );
      })}
    </div>
  );
};

export default ViewToggle;
