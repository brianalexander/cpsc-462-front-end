// React Imports
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Assets
// import logo from "./logo.svg";
import "./App.css";

import ChatWindow from "./components/chat/ChatWindow";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <Button block>About</Button>
        </Col>
        <Col>
          <Row></Row>
          <Row>
            <ChatWindow />
          </Row>
        </Col>
        <Col md="auto">
          <Row>
            <Col>
              <Button block>+</Button>
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

export default App;
