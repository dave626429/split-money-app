import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ToolTip } from "../../../../reusable";

export default function Group({ data }) {
  const { id } = data;

  const navigate = useNavigate();
  return (
    <div
      className="group"
      onClick={() => {
        navigate(`/groups/group/${id}`);
      }}
    >
      <img className="group-img" src="group-placeholder.jpg" alt="" />
      <div className="group-body">
        <ToolTip label={data.groupName} />
      </div>
    </div>
  );
}
