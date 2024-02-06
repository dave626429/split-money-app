import React from "react";
import { Schedule } from "@mui/icons-material";
import { NavLink } from "../../../reusable";

export default function HistoryLink() {
  return <NavLink icon={<Schedule />} label={"History"} to={"/history"} />;
}
