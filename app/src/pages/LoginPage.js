// React Imports
import React, { useState } from "react";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

// Redux Imports
import { connect, useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice";

// react-router imports
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  const [registerUserSpinnerShow, setRegisterUserSpinnerShow] = useState(false);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const buttonHandler = (event) => {
    setRegisterUserSpinnerShow(true);
    console.log("BUTTON HANDLER");

    dispatch(registerUser({ username: input }))
      .then(({ payload }) => {
        history.push("/");
      })
      .catch((args) => {
        console.log("ERROR", args);
        setRegisterUserSpinnerShow(false);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <Button block>About</Button>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter username..."
                onChange={handleInputChange}
                value={input}
              />
              <Form.Text className="text-muted">
                At least 5 letters, numbers, or symbols.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={buttonHandler}>
              {registerUserSpinnerShow ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "GO!"
              )}
            </Button>
          </Form>
        </Col>
        <Col md="auto"></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
