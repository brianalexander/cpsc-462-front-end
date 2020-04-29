import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Win (props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>
          Victory!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Congrats! You've won!
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Win
