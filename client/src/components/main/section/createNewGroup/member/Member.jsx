import React from "react";
import { useSelector } from "react-redux";
import Card from "../../../../reusable/card/Card";
import AddMemberIcon from "../addMemberIcon/AddMemberIcon";
import "./style.css";

function Member() {
  const addedMembers = useSelector((state) => {
    return state.createNewGroup.members;
  });

  const members = addedMembers?.map((member, index) => (
    <Card
      id={member.id}
      key={index}
      name={member.name}
      phone={member.phone}
      imageUrl={member.imageUrl}
    />
  ));

  return (
    <div className="new-members">
      <AddMemberIcon />
      {members}
    </div>
  );
}
export default Member;
