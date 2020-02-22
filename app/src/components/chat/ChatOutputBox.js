import React from "react";

class ChatOutputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { sender: "test1", text: "Hello world!" },
        { sender: "test2", text: "Yo world!" }
      ]
    };
  }

  render() {
    const messages = this.state.messages.map((message, index) => {
      return (
        // class={index % 2 ? "odd" : "even"} handled in CSS instead
        <li>
          [{message.sender}]: {message.text}
        </li>
      );
    });
    return <ul id="chatOutputBox">{messages}</ul>;
  }
}

export default ChatOutputBox;
