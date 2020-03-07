// React Imports
import React, { useState, Component } from "react";
import {Button, Container, Row, Col, Form} from "react-bootstrap";

class JoinPopWindow extends Component {
    render() {
        return (
            <Form className="m-2">
                <Form.Group controlId="formJoinCode">
                    <Form.Label>Type: </Form.Label>
                    <Form.Control type="input" placeholder="type the invitation code..." />
                    <Form.Text className="text-muted">
                        Please type your invitation code...
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="mr-2 mb-2">OK</Button>
                <Button variant="primary" type="button" className="mr-2 mb-2">Cancel</Button>
            </Form>
        );
    }
}

export default JoinPopWindow;