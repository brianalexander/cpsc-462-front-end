import React from "react";
import ChatInputBox from "./ChatInputBox";
import ChatOutputBox from "./ChatOutputBox";

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="chatWindow">
        <ChatOutputBox />
        <ChatInputBox />
      </div>
    );
  }
}

export default ChatWindow;
