import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ShowButton (props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={props.onHide}>Ok</Button>
        <Button variant='secondary' onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ShowButton
