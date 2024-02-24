import React from "react";
import "./style.css";

// component incase the label to be different
export default function ToolTip({ label, component }) {
  return (
    <div className="tooltip" label={label}>
      {component || <p className="tooltip-cation">{label || "Dummy Name"}</p>}
    </div>
  );
}
