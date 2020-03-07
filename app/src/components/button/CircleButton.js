// React Imports
import React, { useState, Component } from "react";
import Button from 'react-bootstrap/Button';
import './CircleButton.css';

class CircleButton extends Component {
    render() {
        return (
            <Button className="btn-circle.btn-m btn-circle" variant="secondary">{this.props.text}</Button>
        );
    }
}

export default CircleButton;