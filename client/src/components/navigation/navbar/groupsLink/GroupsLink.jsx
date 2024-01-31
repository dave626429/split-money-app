import React from "react";
import { Diversity3 } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function GroupsLink() {
  return (
    <NavLink className="nav-link" to={"/groups"}>
      <div className="nav-link-icon">
        <Diversity3 />
      </div>
      <p className="nav-link-name">Groups</p>
    </NavLink>
  );
}
