// React Imports
import React, { useState, useEffect } from "react";

// Redux Imports
import { connect } from "react-redux";

//WebSocket Imports
import { socket } from "./websockets";
import { messageMaker } from "./websockets/functions";

// Assets
// import logo from "./logo.svg";
import "./App.css";

//Game
import Game from "./components/game/Game";

const App = (props) => {
  console.log("gmae prop", props.game);
  useEffect(() => {
    if (props.websocket.status === WebSocket.CLOSED) {
      // TODO: toast disconnected!
    } else if (props.websocket.status === WebSocket.OPEN) {
      // TODO: toast connected
      try {
        socket.send(messageMaker("connect-game", { jwt: props.auth.jwt }));
      } catch (error) {
        console.log(error);
      }
    } else if (props.websocket.status === WebSocket.CONNECTING) {
      // TODO: toast connecting...
    }
  }, [props.websocket.status]);
  console.log("PROPS.GAME", props.game);

  return props.game.state !== null ? <Game /> : "loading spinner";
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    game: state.game,
    websocket: state.websocket,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
