import React, { useState } from "react";

import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CreateGameModal(props) {
  const [createGameSpinnerShow, setCreateGameSpinnerShow] = useState(false);

  const handleClick = async (event) => {
    setCreateGameSpinnerShow(true);
    await props.onClick();
    setCreateGameSpinnerShow(false);
  };

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
        <Button onClick={handleClick} variant="success">
          {createGameSpinnerShow ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Create"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateGameModal;
