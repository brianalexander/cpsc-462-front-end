// React Imports
import React from "react";

import { useParams } from "react-router-dom";

// Redux Imports
import { connect } from "react-redux";

// Game Components
import Game from "../components/game/Game";

function TicTacToe(props) {
  let { id } = useParams();
  return (
    <div>
      <p>{id}</p>
      <Game />
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
