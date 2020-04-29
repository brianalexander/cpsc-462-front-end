// React Imports
import React, { useState } from "react";

// Redux Imports
import { connect } from "react-redux";

// React Bootstrap Imports
import { Switch, Route } from "react-router-dom";

// Assets
// import logo from "./logo.svg";
import "./App.css";

// Pages
import LoginOrHome from "./pages/LoginOrHome";
import TicTacToe from "./pages/TicTacToe";

//Game
import Game from "./components/game/Game";

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginOrHome} />
        <Route exact path="/tictactoe/:id" component={TicTacToe} />
      </Switch>
      <Game />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
