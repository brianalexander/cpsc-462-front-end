import React from "react";
import Board from "./Board";
import { connect } from "react-redux";

import "./game.css";

import { socket } from "../../websockets";
import { messageMaker } from "../../websockets/functions";

import * as speechCommands from "@tensorflow-models/speech-commands";

class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   history: [
    //     {
    //       squares: Array(9).fill(null),
    //     },
    //   ],
    //   stepNumber: 0,
    //   xIsNext: true,
    // };
    socket.send(
      messageMaker("join-game", {
        id: this.props.id,
        jwt: this.props.jwt,
      })
    );
  }

  handleClick(i) {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? "X" : "O";
    socket.send(
      messageMaker("game-state", {
        id: this.props.id,
        jwt: this.props.jwt,
        state: {
          history: history.concat([
            {
              squares: squares,
            },
          ]),
          stepNumber: history.length,
          xIsNext: !this.props.xIsNext,
        },
      })
    );
    console.log("clicked");
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  async createModel() {
    const URL = "https://teachablemachine.withgoogle.com/models/x-5uxW2ku/";
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
        "BROWSER_FFT", // fourier transform type, not useful to change
        undefined, // speech commands vocabulary feature, not useful for your models
        checkpointURL,
        metadataURL);

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  }

  async componentDidMount() {
    const recognizer = await this.createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const locationDict = {
      "top left" : 0,
      "top" : 1,
      "top right" : 2,
      "left" : 3,
      "center" : 4,      
      "right" : 5,      
      "bottom left" : 6,
      "bottom" : 7,
      "bottom right" : 8
    };

    recognizer.listen(result => {
        const scores = result.scores; // probability of prediction for each class
        let maxScore = 0.0, maxIdx = -1;
        for (let i = 0; i < classLabels.length; i++) {
          if (result.scores[i] > maxScore) {
            maxScore = result.scores[i];
            maxIdx = i;            
          }          
        }

        if (classLabels[maxIdx] in locationDict) {
          //alert(classLabels[maxIdx] + ": " + locationDict[classLabels[maxIdx]]);
          this.handleClick(locationDict[classLabels[maxIdx]]);
        }        
        // render the probability scores per class
        // for (let i = 0; i < classLabels.length; i++) {
        //     const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
        //     labelContainer.childNodes[i].innerHTML = classPrediction;
        // }
    }, {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
    });

  }

  render() {
    console.log("PROPS", this.props);
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);    

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;

  return {
    id: id,
    ...state.game.games[id],
    jwt: state.auth.jwt,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
