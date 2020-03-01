import React from "react";
import ChatInputBox from "./ChatInputBox";
import ChatOutputBox from "./ChatOutputBox";
import UserList from "../userlist/UserList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Assets
import "./ChatWindow.css";

class ChatWindow extends React.Component {
  render() {
    return (
      <Container fluid id="chatwindow">
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
  }

  componentWillUnmount() {
    if (this.state.socket !== null) {
      this.state.socket.close();
    }
  }
}

function addPublicMessage(time, sender, text) {
  addText(time, sender, text, "public");
}

function addPrivateMessage(time, sender, text) {
  addText(time, sender, text, "private");
}

function addText(time, sender, text, className) {
  // $("#messages").append(
  //   $("<li>")
  //     .addClass(className)
  //     .text("[" + sender + "(" + time + ")" + "]" + ": " + text)
  // );
}
export default ChatWindow;
