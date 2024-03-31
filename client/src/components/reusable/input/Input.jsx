import React, { forwardRef, useState } from "react";
import "./style.css";

function Input({ label, value, className, ...props }, ref) {
  const [flag, setFlag] = useState(() => (value ? true : false));
  return (
    <div className="input-box">
      <input
        ref={ref}
        className={`input ${className}`}
        onBlur={(e) => {
          e.target.value ? setFlag(true) : setFlag(false);
        }}
        defaultValue={value}
        {...props}
      />
      {props.type != "file" && (
        <p className={`input-label ${flag ? "shrink-input-label" : ""}`}>
          {label}
        </p>
      )}
    </div>
  );
}

export default forwardRef(Input);
