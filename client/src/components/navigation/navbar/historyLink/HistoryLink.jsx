import { Schedule } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HistoryLink() {
  return (
    <NavLink className="nav-link" to={"/history"}>
      <div className="nav-link-icon">
        <Schedule />
      </div>
      <p className="nav-link-name">History</p>
    </NavLink>
  );
}
