import React from "react";
import "./style.css";

export default function Card({ imageUrl, name, phone }) {
  return (
    <div className="card">
      <img className="card-img" src={imageUrl || "/Artboard 1-100.jpg"} />
      <div className="card-body">
        <p className="card-title">{name || "Dummy name"}</p>
        <p className="card-caption">{phone || "9999999999"}</p>
      </div>
      <div className="option-panel"></div>
    </div>
  );
}
