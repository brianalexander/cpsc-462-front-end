// React Imports
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";


// Redux Imports
import { connect } from "react-redux";
import { createGame } from "./redux/lobbySlice";

// Assets
// import logo from "./logo.svg";
import "./App.css";

import ChatWindow from "./components/chat/ChatWindow";
import Lobby from "./components/lobby/Lobby";
import JoinModal from "./components/popups/JoinModal";
import VerticalButtonGroup from "./components/button/VerticalButtonGroup";

const App = props => {

  const [showJoin, setState] = useState(false);

  const showJoinModal = event => {
    if (showJoin) {
      setState(false);
    } else {
      setState(true);
    }
  }


  const createGameHandler = event => {
    props.createGame({ name: "randomName" });
  };

  return (
    <Container fluid>
      <JoinModal show={showJoin} handleClose={showJoinModal}>
        <Form>
          <Form.Group controlId="formJoin">
            <Form.Label>Type: </Form.Label>
            <Form.Control type="input" placeholder="enter invitation code" />
            <Form.Text className="text-muted">
              Please enter invitation code.
            </Form.Text>
          </Form.Group>          
          <Button variant="secondary" type="input"style={{float: 'right', marginLeft: "5px"}} sm="2"> Cancel </Button>
          <Button variant="primary" type="submit" style={{float: 'right'}}> OK </Button>
        </Form>
      </JoinModal>
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
              <Button block onClick={createGameHandler}>
                +                
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button block onClick={showJoinModal}>Join</Button>
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
