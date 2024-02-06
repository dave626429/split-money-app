import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import "./style.css";

export default function Label({ value }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: "10px" }}
      animate={{ opacity: 1, x: "0px" }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      {value || "Add label"}
    </motion.p>
  );
}
