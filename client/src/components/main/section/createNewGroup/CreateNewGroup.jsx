import React, { useEffect, useState } from "react";
import "./style.css";
import { Member } from "../createNewGroup";
import SubHeader from "../../subheader/SubHeader";
import { Button } from "../../../reusable";

const buttons = [
  { key: "cnghb-1", label: "Create" },
  { key: "cnghb-2", label: "Cancel" },
].map((button) => <Button {...button} />);

export default function CreateNewGroup() {
  return (
    <div className="creat-new-group-container-wrapper">
      <SubHeader title="Create New Group" buttons={buttons} />
      <div className="creat-new-group-container">
        <Member />
      </div>
    </div>
  );
}
