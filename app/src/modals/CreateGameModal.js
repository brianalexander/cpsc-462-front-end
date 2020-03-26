import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CreateGameModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Create AI game.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Cancel
        </Button>
        <Button onClick={props.handleCreateGame} variant="success">
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateGameModal;
