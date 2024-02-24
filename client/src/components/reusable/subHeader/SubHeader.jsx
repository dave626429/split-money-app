import React from "react";
import "./style.css";
import { Label } from "../../reusable";

export default function SubHeader({ title, buttons, titleIcon }) {
  return (
    <div className="sub-header">
      <div className="page-title">
        {titleIcon && titleIcon}
        <div className="page-title-label page-title-item">
          <Label value={title} />
        </div>
      </div>
      <div className="submit-options">{buttons}</div>
    </div>
  );
}
