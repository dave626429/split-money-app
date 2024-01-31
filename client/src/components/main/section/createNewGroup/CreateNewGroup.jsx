import React, { useEffect, useState } from "react";
import "./style.css";
import { Member } from "../createNewGroup";

export default function CreateNewGroup() {
  return (
    <div className="creat-new-group-container">
      <Member />
    </div>
  );
}
