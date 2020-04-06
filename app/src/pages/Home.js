// React Imports
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Redux Imports
import { connect, useDispatch } from "react-redux";
import { createTicTacToeGame } from "../redux/gameSlice";

//WebSocket Imports
import { socket } from "../websockets";
import { messageMaker } from "../websockets/functions";

// react-router imports
import { useHistory } from "react-router-dom";

// Modals
import CreateGameModal from "../modals/CreateGameModal";

import ChatWindow from "../components/chat/ChatWindow";
import Lobby from "../components/lobby/Lobby";

const Home = ({ auth, websocket }) => {
  const [createGameModalShow, setCreateGameModalShow] = useState(false);

  if (websocket.status === WebSocket.CLOSED) {
    // TODO: toast disconnected!
  } else if (websocket.status === WebSocket.OPEN) {
    // TODO: toast connected
    try {
      socket.send(messageMaker("register-user", { jwt: auth.jwt }));
    } catch (error) {
      console.log(error);
    }
  } else if (websocket.status === WebSocket.CONNECTING) {
    // TODO: toast connecting...
  }

  const history = useHistory();
  const dispatch = useDispatch();

  const createGame = async () => {
    dispatch(createTicTacToeGame({ name: "randomName" }))
      .then(({ payload }) => {
        history.push(`game/${payload.id}`);
      })
      .catch((args) => {
        console.log("ERROR", args);
      });
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
        onClick={createGame}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    websocket: state.websocket,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
