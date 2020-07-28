import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
    this.increaseLikes = this.increaseLikes.bind(this);
  }
  render() {
    return (
      <Row>
        <Col>
          <Button variant="primary" onClick={this.increaseLikes}>
            Like {this.state.likes}
          </Button>
        </Col>
        <Col>test1</Col>
        <Col>test2</Col>
      </Row>
    );
  }

  increaseLikes() {
    this.setState({
      likes: ++this.state.likes,
    });
  }
}

export default LikeButton;
