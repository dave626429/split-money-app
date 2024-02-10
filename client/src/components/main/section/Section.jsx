import React, { useEffect } from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import CreateNewGroup from "./createNewGroup/CreateNewGroup";

export default function Section() {
  return (
    <div id="section">
      <Routes>
        <Route path="/createnewgroup" element={<CreateNewGroup />} />
        <Route path="/groups" element={<div>Groups</div>} />
        <Route path="/contacts" element={<div>Contacts</div>} />
        <Route path="/history" element={<div>History</div>} />
      </Routes>
    </div>
  );
}
