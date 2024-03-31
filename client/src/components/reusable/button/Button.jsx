import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import { Label } from "../../reusable";

export default function Button({ label, ...props }) {
  return (
    <div className="button" {...props}>
      <Label value={label} />
    </div>
  );
}
