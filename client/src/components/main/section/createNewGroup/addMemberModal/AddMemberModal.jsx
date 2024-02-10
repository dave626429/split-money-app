import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Close, Edit } from "@mui/icons-material";
import Input from "../../../../reusable/input/input";
import { useDispatch } from "react-redux";
import { addMember } from "../../../../../store/createNewGroupSlice";

export default function AddMemberModal({ closeOpenModal }) {
  const imageRef = useRef(null);
  const inputRef = useRef(null);
  const [form, setForm] = useState({
    name: null,
    phone: null,
    imageUrl: null,
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const dispatch = useDispatch();

  return (
    <div
      className="add-member-modal-background"
      onClick={(e) => {
        e.stopPropagation();
        closeOpenModal();
      }}
    >
      <div
        className="add-member-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <div className="title">Add Member</div>
          <div className="close-icon">
            <Close
              onClick={() => {
                console.log("I am clicked");
                closeOpenModal();
              }}
            />
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-body-img-wrap">
            <div
              className="modal-body-img-edit"
              onClick={() => {
                inputRef.current.click();
              }}
            >
              <Edit />
            </div>
            <img
              className="modal-body-img"
              ref={imageRef}
              onClick={() => {
                inputRef.current.click();
              }}
            />
          </div>
          <div className="modal-body-img-file-input">
            <input
              id="imageUrl"
              ref={inputRef}
              type="file"
              onChange={(e) => {
                const fileMetaData = e.target.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  imageRef.current.src = reader.result;
                  setForm({ ...form, [e.target.id]: reader.result });
                });
                reader.readAsDataURL(fileMetaData);
              }}
            />
          </div>

          <Input id="name" label={"Name"} onChange={handleInputChange} />
          <Input
            id="phone"
            label={"Phone"}
            type={"tel"}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-footer">
          <div
            className="button add-button"
            onClick={() => {
              dispatch(addMember(form));
              closeOpenModal();
            }}
          >
            Add
          </div>
        </div>
      </div>
    </div>
  );
}
