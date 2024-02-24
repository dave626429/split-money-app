import React from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SubHeader, Table } from "../../../../reusable";
import { motion } from "framer-motion";

export default function GroupPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const backIcon = (
    <motion.div
      initial={{ opacity: 0, x: "10px" }}
      animate={{ opacity: 1, x: "0px" }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="page-title-icon page-title-item"
      onClick={() => {
        // history is decprecated, use 'navigate' to go back
        navigate(-1);
      }}
    >
      <ArrowBackIcon />
    </motion.div>
  );

  return (
    <div className="groups-page-wrapper">
      <SubHeader title={id} titleIcon={backIcon} />
      <div className="group-page-container">
        <Table />
      </div>
    </div>
  );
}
