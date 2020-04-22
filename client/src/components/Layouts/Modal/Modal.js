import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import LoginModal from "./LoginModal.js";

const AppModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    const modalLoaded = () => {
      setTitle("Log In");
    };
  
    return (
        <div>
        <button onClick={showModal}>Log In</button>
        <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <LoginModal/> {/* This is the login form */}

              </Modal.Body>

        </Modal>
        </div>
    );
  };

  export default AppModal;