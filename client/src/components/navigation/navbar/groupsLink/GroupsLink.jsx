import React from "react";
import { Diversity3 } from "@mui/icons-material";
import { NavLink } from "../../../reusable";

export default function GroupsLink() {
  return <NavLink icon={<Diversity3 />} label={"Groups"} to={"/groups"} />;
}
