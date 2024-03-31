import Diversity2Icon from "@mui/icons-material/Diversity2";
import React from "react";
import { NavLink } from "../../../reusable";
import "./style.css";

export default function CreateNewGroupLink() {
  return (
    <NavLink
      icon={<Diversity2Icon />}
      label={"Create Group"}
      to={"/createnewgroup"}
    />
  );
}
