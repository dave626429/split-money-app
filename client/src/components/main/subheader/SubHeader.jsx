import React from "react";
import "./style.css";
import { Button } from "../../reusable";

export default function SubHeader({ title, buttons }) {
  return (
    <div className="sub-header">
      <p className="page-title">{title || "Add Title"}</p>
      <div className="submit-options">{buttons}</div>
    </div>
  );
}
