import React from "react";
import "./style.css";
import { Diversity2 } from "@mui/icons-material";
import { NavLink } from "../../../reusable";
import { useDispatch, useSelector } from "react-redux";
import { setInitialState } from "../../../../store/createNewGroupSlice";

export default function CreateNewGroupLink() {
  return (
    <NavLink
      icon={<Diversity2 />}
      label={"Create Group"}
      to={"/createnewgroup"}
    />
  );
}
