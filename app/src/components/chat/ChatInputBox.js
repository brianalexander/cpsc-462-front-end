// React Imports
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

// Redux Imports
import { connect } from "react-redux";
import { sendPublicMessage, sendPrivateMessage } from "../../redux/chatSlice";

// Assets
import "./ChatInputBox.css";

const ChatInputBox = props => {
  const [input, setInput] = useState("");

  const sendMessage = event => {
    event.preventDefault();
    if (input !== "") {
      if (input[0] === "@") {
        const idRegex = /^@(.+)\s(.+)/;
        // not a typo, the first comma ignores first value
        const [, target, text] = input.match(idRegex);
        props.sendPrivateMessage({ target, text });
      } else {
        const text = input;
        props.sendPublicMessage({ text });
      }

      setInput("");
    }

    return false;
  };

  const handleInputChange = event => {
    setInput(event.target.value);
  };

  return (
    <div>
      <InputGroup>
        <FormControl
          className="rounded-0"
          placeholder="Enter message..."
          aria-label="Chat Message Text"
          onChange={handleInputChange}
          value={input}
        />
        <InputGroup.Append>
          <Button
            className="rounded-0"
            onClick={sendMessage}
            variant="secondary"
          >
            Send
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { sendPublicMessage, sendPrivateMessage };

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputBox);
