// React Imports
import React from "react";

import { useParams } from "react-router-dom";

// Redux Imports
import { connect } from "react-redux";

// Game Components
import Game from "../components/game/Game";

function TicTacToe(props) {
  let { id } = useParams();
  const { auth, game } = props;
  console.log("TICTACTOE", game);
  if (game) {
  } else {
    // TODO: RETURN LOADING
    return <div>LOADING {id}</div>;
  }
  return (
    <div>
      <p>{id}</p>
      {/* <Game
        player1={game.players[0]}
        player2={game.players[1]}
        stepNumber={game.stepNumber + 1}
        xIsNext={game.xIsNext}
        history={game.history}
      /> */}
      <Game id={id} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    auth: state.auth,
    game: state.game.games[id],
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
