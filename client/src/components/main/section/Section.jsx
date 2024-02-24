import React, { useEffect } from "react";
import "./style.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { CreateNewGroup, Groups, Home } from "../section";
import GroupPage from "./groups/groupPage/GroupPage";

export default function Section() {
  return (
    <div id="section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createnewgroup" element={<CreateNewGroup />} />
        <Route path="/contacts" element={<div>Contacts</div>} />
        <Route path="/history" element={<div>History</div>} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/group/:id" element={<GroupPage />} />
      </Routes>
    </div>
  );
}
