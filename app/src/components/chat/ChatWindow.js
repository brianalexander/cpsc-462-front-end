import React from "react";
import ChatInputBox from "./ChatInputBox";
import ChatOutputBox from "./ChatOutputBox";
import UserList from "../userlist/UserList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Assets
import "./ChatWindow.css";

const ChatWindow = props => {
  return (
    <Container className="p-0" fluid id="chatwindow">
      <Row noGutters>
        <Col className="mr-2">
          <ChatOutputBox />
          <ChatInputBox />
        </Col>
        <Col md="auto">
          <UserList />
        </Col>
      </Row>
    </Container>
  );
};

export default ChatWindow;
