import React from "react";
import { PermContactCalendarOutlined } from "@mui/icons-material";
import { NavLink } from "../../../reusable";

export default function ContactsLink() {
  return (
    <NavLink
      icon={<PermContactCalendarOutlined />}
      label={"Contacts"}
      to={"/contacts"}
    />
  );
}
