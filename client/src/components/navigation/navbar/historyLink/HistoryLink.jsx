import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { NavLink } from "../../../reusable";

export default function HistoryLink() {
  return <NavLink icon={<ScheduleIcon />} label={"History"} to={"/history"} />;
}
