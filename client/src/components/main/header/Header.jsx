import React from "react";
import "./style.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  return (
    <div id="header">
      <div className="header-container">
        <div className="header-icon">
          <AccountCircle />
        </div>
        <div className="header-icon">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}
