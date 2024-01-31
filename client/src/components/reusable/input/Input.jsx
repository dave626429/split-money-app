import React, { useState } from "react";
import "./style.css";

export default function Input({ id, label, type = "text", onChange }) {
  const [flag, setFlag] = useState(false);
  return (
    <div className="input-box">
      <input
        id={id}
        type={type}
        className="input"
        onBlur={(e) => {
          e.target.value ? setFlag(true) : setFlag(false);
        }}
        onChange={onChange}
      />
      {type != "file" && (
        <p className={`input-label ${flag ? "shrink-input-label" : ""}`}>
          {label}
        </p>
      )}
    </div>
  );
}
