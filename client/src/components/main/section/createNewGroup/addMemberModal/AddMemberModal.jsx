import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Input } from "../../../../reusable";
import { useDispatch } from "react-redux";
import { addMember } from "../../../../../store/createNewGroupSlice";
import axios from "axios";

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
                loading="lazy"
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
                onChange={async (e) => {
                  if (!e.target.files.length) return;
                  const file = e.target.files[0];

                  // saving images to the server side,
                  // no need to set enctype="multipart/form-data",
                  // FormData has it as default enctype="multipart/form-data"
                  const formData = new FormData();
                  formData.append("image", file);

                  // serving images from server side logic
                  const SERVERURL = import.meta.env.VITE_BACKEND_URI;

                  const response = await axios.post(
                    `${SERVERURL}/uploads`,
                    formData
                  );

                  const { fileName } = response.data;

                  const imgServerUrl = `${SERVERURL}/images/${fileName}`;

                  imageRef.current.src = imgServerUrl;
                  setForm({ ...form, [e.target.id]: imgServerUrl });
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
