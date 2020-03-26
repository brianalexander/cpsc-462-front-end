// React Imports
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

// Redux Imports
import { connect } from "react-redux";

// React Bootstrap Imports
import { Switch, Route } from "react-router-dom";

// Assets
// import logo from "./logo.svg";
import "./App.css";

// Pages
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game/:id" component={TicTacToe} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
