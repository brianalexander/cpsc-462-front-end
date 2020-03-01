// React Imports
import React from "react";

import { chunk } from "lodash";

// Redux Imports
import { connect } from "react-redux";

// React-bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GameTagGrid = props => {
  const { cols: numCols } = props;
  const cols = React.Children.toArray(props.children).map((gameTag, index) => {
    return <Col key={index}>{gameTag}</Col>;
  });
  const rows = chunk(cols, numCols);

  const mappedTags = rows.map((row, index) => {
    return (
      <Row noGutters key={index}>
        {row}
      </Row>
    );
  });

  return (
    <Container style={{ minHeight: "245px" }} className="p-0" fluid>
      {mappedTags}
    </Container>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameTagGrid);
