import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { NavLink } from "../../../reusable";

export default function GroupsLink() {
  return <NavLink icon={<Diversity3Icon />} label={"Groups"} to={"/groups"} />;
}
