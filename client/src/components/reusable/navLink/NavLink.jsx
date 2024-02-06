import React from "react";
import { NavLink as RRDNavLink } from "react-router-dom";
import { Label } from "../../reusable";
import "./style.css";

export default function NavLink({ icon, to, label }) {
  return (
    <RRDNavLink className="nav-link" to={to}>
      <div className="nav-link-icon">{icon}</div>
      <div className="nav-link-name">
        <Label value={label} />
      </div>
    </RRDNavLink>
  );
}
