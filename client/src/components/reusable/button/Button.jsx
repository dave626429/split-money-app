import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import { Label } from "../../reusable";

export default function Button({ label, onclick }) {
  return (
    <div className="button" onClick={onclick}>
      <Label value={label} />
    </div>
  );
}
