import React from "react";
import Square from "./Square";
import './board.css';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

const Slide = styled.div`animation: 3s ${keyframes` ${slideInDown}`}`;

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <Slide><div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div></Slide>
      </div>
    );
  }
}

export default Board;
