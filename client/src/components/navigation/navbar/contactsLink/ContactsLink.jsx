import React from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { NavLink } from "../../../reusable";

export default function ContactsLink() {
  return (
    <NavLink
      icon={<PermContactCalendarIcon />}
      label={"Contacts"}
      to={"/contacts"}
    />
  );
}
