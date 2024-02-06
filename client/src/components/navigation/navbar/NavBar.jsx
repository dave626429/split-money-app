import React from "react";
import {
  ContactsLink,
  CreateNewGroupLink,
  GroupsLink,
  HistoryLink,
} from "../navbar";
import "./style.css";

export default function NavBar() {
  return (
    <div>
      <CreateNewGroupLink />
      <GroupsLink />
      <ContactsLink />
      <HistoryLink />
    </div>
  );
}
