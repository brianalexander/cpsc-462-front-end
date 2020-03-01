// React Imports
import React from "react";
import Card from "react-bootstrap/Card";

// Redux Imports
import { connect } from "react-redux";

const GameTag = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.timestamp}
        </Card.Subtitle>
        <Card.Text>
          [Status: {props.status}] [Players: {props.players}] [Spectators:
          {props.spectators}]
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameTag);
