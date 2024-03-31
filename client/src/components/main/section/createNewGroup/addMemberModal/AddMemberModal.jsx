import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Input } from "../../../../reusable";
import { useDispatch } from "react-redux";
import { addMember } from "../../../../../store/createNewGroupSlice";

export default function AddMemberModal({ closeOpenModal }) {
  const imageRef = useRef(null);
  const inputRef = useRef(null);
  const [form, setForm] = useState({
    name: null,
    phone: null,
    imageUrl: "/Artboard 1-100.jpg",
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
        {/* Add Member Modal Header */}
        <div className="add-member-modal-header">
          <div className="title">Add Member</div>
          <div className="add-member-close-icon">
            <CloseIcon
              onClick={() => {
                closeOpenModal();
              }}
            />
          </div>
        </div>
        {/* Add Member Modal Body */}
        <div className="add-member-modal-body">
          {/* Add Member Modal Body > Member image*/}
          <div className="add-member-modal-body-upload-img">
            <div className="add-member-modal-body-img-wrap">
              <div
                className="add-member-modal-body-img-edit"
                onClick={() => {
                  inputRef.current.click();
                }}
              >
                <EditIcon />
              </div>
              <img
                className="add-member-modal-body-img"
                ref={imageRef}
                onClick={() => {
                  inputRef.current.click();
                }}
              />
            </div>
            <div className="add-member-modal-body-img-file-input">
              <input
                id="imageUrl"
                ref={inputRef}
                type="file"
                onChange={(e) => {
                  if (!e.target.files.length) return;
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
          </div>
          {/* Add Member Modal Body > Member input fields*/}
          <div className="add-member-modal-body-input-fields-wrapper">
            <div className="input-field">
              <Input id="name" label={"Name"} onChange={handleInputChange} />
            </div>
            <div className="input-field">
              <Input
                id="phone"
                label={"Phone"}
                type={"tel"}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Add Member Modal Footer*/}
        <div className="add-member-modal-footer">
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
