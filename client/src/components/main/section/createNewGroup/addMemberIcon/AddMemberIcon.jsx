import React, { useState } from "react";
import "./style.css";
import { Add } from "@mui/icons-material";
import AddMemberModal from "../addMemberModal/AddMemberModal";

export default function AddMemberIcon() {
  const [openModal, setOpenModal] = useState(false);
  const closeOpenModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div
        className="addmember-container"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <Add />
      </div>
      {openModal && <AddMemberModal closeOpenModal={closeOpenModal} />}
    </>
  );
}
