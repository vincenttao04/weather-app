import React from "react";
import ThreeDayIcon from "@mui/icons-material/ViewWeekRounded";
import OneDayIcon from "@mui/icons-material/WebAssetRounded";

const ViewToggle = ({ view, setView }) => {
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
      <OneDayIcon
        sx={{ cursor: "pointer" }}
        onClick={() => setView("one-day")}
      />
      <ThreeDayIcon
        sx={{ cursor: "pointer" }}
        onClick={() => setView("three-day")}
      />
    </div>
  );
};

export default ViewToggle;
