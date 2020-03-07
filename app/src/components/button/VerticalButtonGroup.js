import React, { useState, Component } from "react";
import CircleButton from "./CircleButton";
import { Container, Row } from "react-bootstrap";
import "./VerticalButtonGroup.css";

class VerticalButtonGroup extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <CircleButton text="AI" />
                </Row>
                <Row>
                    <CircleButton text="+" />
                </Row>
                <Row>
                    <CircleButton text="History" />
                </Row>
            </Container>                 
        );
    }
}

export default VerticalButtonGroup;