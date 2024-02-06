import React, { useEffect, useState } from "react";
import "./style.css";
import { Member } from "../createNewGroup";
import SubHeader from "../../subheader/SubHeader";
import { Button } from "../../../reusable";
import { useDispatch, useSelector } from "react-redux";
import TitleInput from "../../../reusable/titleInput/TitleInput";

export default function CreateNewGroup() {
  const newGroup = useSelector((state) => state.createNewGroup);

  const createGroup = () => {
    console.log(newGroup);
  };

  const buttons = [
    { key: "cngshb-1", label: "Create", onclick: createGroup },
    // { key: "cngshb-2", label: "Cancel" },
  ].map((button) => (newGroup.length ? <Button {...button} /> : ""));

  return (
    <div className="creat-new-group-container-wrapper">
      <SubHeader title="Create Group" buttons={buttons} />

      <div className="creat-new-group-container">
        <TitleInput />
        <Member />
      </div>
    </div>
  );
}
