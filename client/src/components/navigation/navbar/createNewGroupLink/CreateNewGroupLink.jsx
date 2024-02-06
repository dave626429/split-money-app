import React from "react";
import "./style.css";
import { Diversity2 } from "@mui/icons-material";
import { NavLink } from "../../../reusable";

export default function CreateNewGroupLink() {
  return (
    <NavLink
      icon={<Diversity2 />}
      label={"Create Group"}
      to={"/createnewgroup"}
    />
  );
}
