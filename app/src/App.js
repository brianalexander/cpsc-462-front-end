// React Imports
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Redux Imports
import { connect } from "react-redux";
import { createGame } from "./redux/lobbySlice";

// Assets
// import logo from "./logo.svg";
import "./App.css";

import ChatWindow from "./components/chat/ChatWindow";
import Lobby from "./components/lobby/Lobby";

const App = props => {
  const createGameHandler = event => {
    props.createGame({ name: "randomName" });
  };
  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <Button block>About</Button>
        </Col>
        <Col>
          <Row>
            <Lobby />
          </Row>
          <Row>
            <ChatWindow />
          </Row>
        </Col>
        <Col md="auto">
          <Row>
            <Col>
              <Button block onClick={createGameHandler}>
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button block>Join</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { createGame };

export default connect(mapStateToProps, mapDispatchToProps)(App);
