import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Lose (props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>
          Defeat!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You're a loser!
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Lose
