import React from "react";
import ChatInputBox from "./ChatInputBox";
import ChatOutputBox from "./ChatOutputBox";
import UserList from "../userlist/UserList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ChatWindow.css";

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    const serverUrl = "ws" + "://" + "localhost" + ":3000";
    const socket = new WebSocket(serverUrl);

    this.state = {
      socket,
      users: []
    };
    this.registerWebsockets();
  }

  registerWebsockets = () => {
    console.log("***CREATED WEBSOCKET");

    this.state.socket.onopen = function(evt) {
      console.log("***ONOPEN");
    };

    this.state.socket.onmessage = ({ data }) => {
      const { type, payload } = JSON.parse(data);
      switch (type) {
        case "userlist":
          {
            const { users } = payload;
            this.setState({
              users: users.map(user => {
                return { id: user };
              })
            });
            updateUserList(users);
          }
          break;
        case "connected":
          {
            const { id } = payload;
            this.state.socket.id = id;
            // document.getElementById("text").disabled = false;
            // document.getElementById("send").disabled = false;
          }
          break;
        case "private":
          {
            const { sender, text } = payload;
            addPrivateMessage(Date.now(), sender, text);
          }
          break;
        case "public":
          {
            const { sender, text } = payload;
            addPublicMessage(Date.now(), sender, text);
          }
          break;
      }
    };
  };

  handleClicked = text => {
    console.log(text);
  };

  render() {
    return (
      <Container fluid id="chatwindow">
        <Row noGutters>
          <Col className="mr-2">
            <ChatOutputBox />
            <ChatInputBox returnText={this.handleClicked} />
          </Col>
          <Col md="auto">
            <UserList users={this.state.users} />
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

function updateUserList(users) {
  // $("#userlist").empty();
  // for (user of users) {
  //   let userTag = $("<li>").text(user);
  //   if (user === socket.id) {
  //     userTag.css("color", "red");
  //   }
  //   $("#userlist").append(userTag);
  // }
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

function sendPublicMessage(socket, text) {
  const message = messageMaker("public", { text });
  sendMessageToServer(socket, message);
  addPublicMessage(Date.now(), socket.id, text);
}

function sendPrivateMessage(socket, target, text) {
  const message = messageMaker("private", { target, text });
  sendMessageToServer(socket, message);
  addPrivateMessage(Date.now(), socket.id, text);
}

function sendMessageToServer(socket, message) {
  socket.send(message);
}

function messageMaker(type, payload) {
  return JSON.stringify({ type, payload });
}

export default ChatWindow;
