import React from "react";

// Redux Imports
import { connect } from "react-redux";

// Assets
import "./ChatOutputBox.css";

const ChatOutputBox = props => {
  const messages = props.public.map((message, index) => {
    return (
      <li>
        [{message.sender} {message.timestamp}]: {message.text}
      </li>
    );
  });

  return <ul id="chatOutputBox">{messages}</ul>;
};

const mapStateToProps = state => {
  console.log(state);
  return {
    public: state.chat.public,
    private: state.chat.private
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatOutputBox);
