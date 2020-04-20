import React from 'react'
import logo from './logo.svg'
import './App.css'
import img1 from './blue.jpg'
import img2 from './red.png'

function Icons () {
  return (
    <div>
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
    </div>
  )
}

export default Icons
