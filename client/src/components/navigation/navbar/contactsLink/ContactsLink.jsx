import React from "react";
import { PermContactCalendarOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function ContactsLink() {
  return (
    <NavLink className="nav-link" to={"/contacts"}>
      <div className="nav-link-icon">
        <PermContactCalendarOutlined />
      </div>
      <p className="nav-link-name">Contacts</p>
    </NavLink>
  );
}
