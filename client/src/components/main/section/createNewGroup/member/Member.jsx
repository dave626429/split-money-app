import React, { useEffect } from "react";
import Card from "../../../../reusable/card/Card";
import { useSelector } from "react-redux";
import "./style.css";
import AddMemberIcon from "../addMemberIcon/AddMemberIcon";

export default function Member() {
  const addedMembers = useSelector((state) => {
    return state.createNewGroup;
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

  useEffect(() => {
    console.log(addedMembers);
  }, [addedMembers]);

  return (
    <div className="new-members">
      <AddMemberIcon />
      {members}
    </div>
  );
}
