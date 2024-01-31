import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div id="header">
      <div className="header-container">
        <FontAwesomeIcon className="header-icon" icon={faUser} />
        <FontAwesomeIcon className="header-icon" icon={faRightFromBracket} />
      </div>
    </div>
  );
}
