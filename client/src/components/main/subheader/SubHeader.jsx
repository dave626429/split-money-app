import React from "react";
import "./style.css";
import { Button, Label } from "../../reusable";

export default function SubHeader({ title, buttons }) {
  return (
    <div className="sub-header">
      <div className="page-title">
        <Label value={title} />
      </div>
      <div className="submit-options">{buttons}</div>
    </div>
  );
}
