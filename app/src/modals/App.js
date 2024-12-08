import React from 'react'
import logo from './logo.svg'
import './App.css'
import img1 from './blue.jpg'
import img2 from './red.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function App () {
  const [winShow, setWinShow] = React.useState(false)
  const [loseShow, setLoseShow] = React.useState(false)

  const handleWinClose = () => setWinShow(false)
  const handleLoseClose = () => setLoseShow(false)
  // const handleShow = () => setShow(true)

  return (
    <div className='App'>
      <header className='App-header'>
        {/* Player Icons */}
        <p>
          <img src={img1} width='100' height='50' thumbnail />
        </p>
        <a>
          Player 1
        </a>
        <p>
          <img src={img2} width='100' height='50' thumbnail />
        </p>
        <a>
          Player 2
        </a>
        {/* Ok and Cancel Buttons */}
        <button onClick={handleClick}>
        Ok
        </button>
        <button onClick={cancelClick}>
        Cancel
        </button>
        {/* Inputbox - Gameid and Game name */}
        <p>Enter Gameid/Game Name:</p>
        <input
          type='text'
          onChange={myChangeHandler}
        />
        {/* Modal Win/Lose */}
        <Button variant='primary' onClick={() => setWinShow(true)}> Win  </Button>
        <Button variant='secondary' onClick={() => setLoseShow(true)}> Lose </Button>

        <Modal show={winShow} onHide={() => setWinShow(false)}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>Victory!</Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={handleWinClose}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={loseShow} onHide={handleLoseClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>Defeat!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleLoseClose}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>
      </header>

    </div>
  )
}

function handleClick (e) {
  e.preventDefault()
  console.log('OK was clicked.')
}

function cancelClick (e) {
  e.preventDefault()
  console.log('Cancel was clicked.')
}

function myChangeHandler (e) {
  e.preventDefault()
  console.log('Gameid/game name was entered')
}

export default App
