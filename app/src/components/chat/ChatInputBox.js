import React from "react";

class ChatInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.updateChatText = this.updateChatText.bind(this);
    this.sendClicked = this.sendClicked.bind(this);
  }

  sendClicked(event) {
    // TODO: Add clicked logic here
    event.preventDefault();
  }

  updateChatText(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.sendClicked}>
        <input
          id="chatBoxTextInput"
          type="text"
          onchange={this.updateChatText}
          value={this.state.value}
        />
        <input id="chatBoxSubmit" type="submit" value="Send" />
      </form>
    );
  }
}

export default ChatInputBox;
