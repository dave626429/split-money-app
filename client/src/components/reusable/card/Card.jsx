import React from "react";
import "./style.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeMember } from "../../../store/createNewGroupSlice";

export default function Card({ imageUrl, name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img
        className="card-img"
        src={imageUrl || "/Artboard 1-100.jpg"}
        loading="lazy"
      />
      <div className="card-body">
        <p className="card-title">{name || "Dummy name"}</p>
        <p className="card-caption">{phone || "9999999999"}</p>
      </div>
      {/* right-side option panel */}
      <div className="option-panel">
        <div className="option-panel-icons">
          <div
            className="card-delete-icon option-panel-icon"
            onClick={() => {
              dispatch(removeMember(id));
            }}
          >
            <DeleteIcon />
          </div>
          <div className="card-call-icon option-panel-icon">
            <AddIcCallIcon />
          </div>
          <div className="card-delete-icon option-panel-icon">
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
