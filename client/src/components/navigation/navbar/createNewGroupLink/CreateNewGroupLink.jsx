import React from "react";
import "./style.css";
import { Diversity2 } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function CreateNewGroupLink() {
  return (
    <NavLink className="nav-link" to={"/createnewgroup"}>
      <div className="nav-link-icon">
        <Diversity2 />
      </div>
      <p className="nav-link-name">Create Group</p>
    </NavLink>
  );
}
