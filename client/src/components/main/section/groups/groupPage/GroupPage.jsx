import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Input, Modal, SubHeader, Table } from "../../../../reusable";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { editMember, getGroupByID } from "../../../../../store/groupsSlice";

export default function GroupPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const groupData = useSelector((state) => getGroupByID(state, id));
  const navigate = useNavigate();
  // if (!groupData) navigate("/groups");
  const [modalState, setModalState] = useState(false);
  const [modal, setModal] = useState(null);
  const members = groupData?.members;
  const modalTitle = groupData?.groupName;
  const phoneRef = useRef(null);
  const nameRef = useRef(null);

  const onInputChange = (e) => {
    let inputType = e.target.type;
    let inputName = e.target.name;
    let inputValue = e.target.type;
  };

  const onModalSave = () => {
    console.log(modal.id, phoneRef.current.value, nameRef.current.value);
    dispatch(
      editMember({
        groupId: id,
        id: modal.id,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      })
    );
  };

  const backIcon = (
    <motion.div
      initial={{ opacity: 0, x: "10px" }}
      animate={{ opacity: 1, x: "0px" }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="page-title-icon page-title-item"
      onClick={() => {
        // history is decprecated, use 'navigate' to go back
        navigate("/groups");
      }}
    >
      <ArrowBackIcon />
    </motion.div>
  );

  const ModalBody = (
    <div
      className="group-page-modal-body-wrapper"
      style={{
        backgroundColor: "antiquewhite",
        padding: "0.5em",
        borderRadius: "0.5em",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "0.5em",
        }}
      >
        <img
          src={modal?.imageUrl}
          alt="member image"
          style={{ width: "130px", height: "130px", borderRadius: "0.5em" }}
        />
      </div>
      <div className="modal-fields">
        <div className="modal-field">
          <Input name="id" label="id" value={modal?.id} disabled />
        </div>
        <div className="modal-field">
          <Input
            name="name"
            label="name"
            value={modal?.name}
            onChange={onInputChange}
            ref={nameRef}
          />
        </div>
        <div className="modal-field">
          <Input
            name="phone"
            type="tel"
            label="phone"
            value={modal?.phone}
            onChange={onInputChange}
            ref={phoneRef}
          />
        </div>
      </div>
    </div>
  );

  const ModalFooter = (
    <>
      <Button label="Save" onClick={onModalSave} />
    </>
  );

  const onTableRowClick = (row) => {
    setModal(row);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    if (!groupData) navigate("/groups");
  }, []);

  if (!groupData) return <></>;

  return (
    <div className="groups-page-wrapper">
      <SubHeader title={modalTitle} titleIcon={backIcon} />
      <div className="group-page-container">
        {modalState && (
          <Modal
            title={`${modalTitle}` || "Add title"}
            closeModal={closeModal}
            modalBody={ModalBody}
            modalFooter={ModalFooter}
          />
        )}
        <Table data={members} onRowClick={onTableRowClick} />
      </div>
    </div>
  );
}
