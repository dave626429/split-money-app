import React from "react";
import "./style.css";

export default function Button({ label }) {
  return <div className="button">{label || "Add label"}</div>;
}
