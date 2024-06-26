import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
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
        <AddIcon />
      </div>
      {openModal && <AddMemberModal closeOpenModal={closeOpenModal} />}
    </>
  );
}
