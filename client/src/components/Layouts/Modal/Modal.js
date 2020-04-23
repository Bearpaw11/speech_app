import React from "react";
import Modal from "react-bootstrap/Modal";
import LoginModal from "./LoginModal.js";







const AppModal = (props) => {
    return (
        <div>
        <Modal show={props.isOpen} onHide={props.hideModal}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
                <LoginModal/> {/* This is the login form */}
            </Modal.Body>
        </Modal>
        </div>
    );
  };

  export default AppModal;