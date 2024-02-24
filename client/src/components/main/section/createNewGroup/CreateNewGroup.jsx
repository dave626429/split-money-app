import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Member } from "../createNewGroup";
import { SubHeader } from "../../../reusable";
import { Button } from "../../../reusable";
import { useDispatch, useSelector } from "react-redux";
import TitleInput from "../../../reusable/titleInput/TitleInput";
import {
  resetState,
  setInitialState,
} from "../../../../store/createNewGroupSlice";
import { addGroup } from "../../../../store/groupsSlice";
import { useNavigate } from "react-router-dom";

export default function CreateNewGroup() {
  const newGroup = useSelector((state) => state.createNewGroup);
  const groups = useSelector((state) => state.groups);
  const titleInputRef = useRef({ titleInputValue: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createGroup = () => {
    dispatch(addGroup(newGroup));
    dispatch(resetState());
    navigate("/");
  };

  useEffect(() => {
    // setting the initial state with id when component loads
    dispatch(setInitialState(groups));
    return () => {
      // TODO : needs to remove/reset the initial state
      dispatch(resetState());
    };
  }, []);

  const Buttons = [
    { key: "cngshb-1", label: "Create", onclick: createGroup },
  ].map((props) => (newGroup.members.length ? <Button {...props} /> : ""));

  return (
    <div className="creat-new-group-container-wrapper">
      <SubHeader title="Create Group" buttons={Buttons} />
      <div className="creat-new-group-container">
        <TitleInput ref={titleInputRef} />
        <Member />
      </div>
    </div>
  );
}
