// React Imports
import React from "react";

// Redux Imports
import { connect } from "react-redux";

// React-bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InfoHeader from "./InfoHeader";
import GameTagGrid from "./GameTagGrid";
import GameTag from "./GameTag";

const Lobby = props => {
  // const games = [
  //   {
  //     name: "name",
  //     status: "status",
  //     players: ["one", "two"],
  //     spectators: ["three", "four"],
  //     timestamp: Date.now()
  //   },
  //   {
  //     name: "name",
  //     status: "status",
  //     players: ["one", "two"],
  //     spectators: ["three", "four"],
  //     timestamp: Date.now()
  //   },
  //   {
  //     name: "name",
  //     status: "status",
  //     players: ["one", "two"],
  //     spectators: ["three", "four"],
  //     timestamp: Date.now()
  //   },
  //   {
  //     name: "name",
  //     status: "status",
  //     players: ["one", "two"],
  //     spectators: ["three", "four"],
  //     timestamp: Date.now()
  //   }
  // ];

  const gameTags = props.games.map((game, index) => {
    return (
      <GameTag
        name={game.name}
        status={game.status}
        players={game.players}
        spectators={game.spectators}
        timestamp={game.timestamp}
        key={index}
      />
    );
  });

  return (
    <Container className="p-0" fluid>
      <Row>
        <Col>
          <InfoHeader />
          <GameTagGrid cols={2}>{gameTags}</GameTagGrid>{" "}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    games: state.lobby.games
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
