import React, { useEffect } from "react";
import { SubHeader } from "../../../reusable";
import "./style.css";
import Group from "./group/Group";
import { useSelector } from "react-redux";

export default function Groups() {
  const groups = useSelector((state) => state.groups);

  return (
    <div className="groups-wrapper">
      <SubHeader title="Groups" />
      <div className="groups-container">
        <div className="group-container">
          {groups.map((data, i) => {
            return <Group key={`group-${i}`} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
