import React from "react";
import Board from "./board";
import io from 'socket.io-client';

 
import './game.css'
const socket = io('http://localhost:3000');

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
