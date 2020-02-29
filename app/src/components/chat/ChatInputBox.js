import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./ChatInputBox.css";

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
    this.props.returnText(this.state.value);
    this.setState({ value: "" });
  }

  updateChatText(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <InputGroup>
          <FormControl
            className="rounded-0"
            placeholder="Enter message..."
            aria-label="Recipient's username"
            onChange={this.updateChatText}
            value={this.state.value}
          />
          <InputGroup.Append>
            <Button
              className="rounded-0"
              onClick={this.sendClicked}
              variant="secondary"
            >
              Send
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default ChatInputBox;
