import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

/**
 * Modal component.
 * @param {object} props - The props object.
 * @param {function} props.closeModal - The function to close the modal.
 * @param {object} props.modalHeader - The header of the modal.
 * @param {object} props.modalBody - The body of the modal.
 * @param {object} props.modalFooter - The footer of the modal.
 * @returns {JSX.Element} The modal component.
 */
function Modal({ closeModal, modalBody, modalFooter, modalHeader, title }) {
  return (
    <div
      className="modal-background"
      onClick={() => {
        closeModal();
      }}
    >
      <div
        className="modal-container"
        onClick={(e) => {
          // To avoid 'Event Capturing', on other use
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <div className="modal-header-title-area">{title || "Add Title"}</div>
          <div
            className="modal-close-icon"
            onClick={() => {
              closeModal();
            }}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="modal-body">{modalBody}</div>
        <div className="modal-footer">{modalFooter || "Modal Footer"}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  modalHeader: PropTypes.element,
  modalBody: PropTypes.element,
  modalFooter: PropTypes.element,
};

export default Modal;
