import React from "react";
import "./style.css";
import { Delete, AddIcCall } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeMember } from "../../../store/createNewGroupSlice";

export default function Card({ imageUrl, name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img className="card-img" src={imageUrl || "/Artboard 1-100.jpg"} />
      <div className="card-body">
        <p className="card-title">{name || "Dummy name"}</p>
        <p className="card-caption">{phone || "9999999999"}</p>
      </div>
      <div className="option-panel">
        <div className="option-panel-icons">
          <div
            className="card-delete-icon option-panel-icon"
            onClick={() => {
              dispatch(removeMember(id));
            }}
          >
            <Delete />
          </div>
          <div className="card-call-icon option-panel-icon">
            <AddIcCall />
          </div>
          <div className="card-delete-icon option-panel-icon">
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
}
