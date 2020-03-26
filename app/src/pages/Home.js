// React Imports
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

// Redux Imports
import { connect, useDispatch } from "react-redux";
import { createTicTacToeGame } from "../redux/gameSlice";

// react-router imports
import { useHistory } from "react-router-dom";

// Assets
// import logo from "./logo.svg";
// import "./App.css";

// Modals
import CreateGameModal from "../modals/CreateGameModal";

import ChatWindow from "../components/chat/ChatWindow";
import Lobby from "../components/lobby/Lobby";

const Home = props => {
  const [createGameModalShow, setCreateGameModalShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

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
              {/* <VerticalButtonGroup /> */}
              <Button
                block
                onClick={() => {
                  setCreateGameModalShow(true);
                }}
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button block onClick={() => {}}>
                Join
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <CreateGameModal
        show={createGameModalShow}
        onHide={() => {
          setCreateGameModalShow(false);
        }}
        handleCreateGame={event => {
          dispatch(createTicTacToeGame({ name: "randomName" }))
            .then(({ payload }) => {
              history.push(`game/${payload.id}`);
            })
            .catch(args => {
              console.log("ERROR", args);
            });
        }}
      />
    </Container>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
