import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { commentNumber } = this.props;
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="userCommentForm">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="enter Comment"
              ref={(textInput) => {
                this.textInput = textInput;
              }}
            ></Form.Control>
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <span>{commentNumber} comments</span>
            </Col>
          </Row>
        </Form>
    );
  }

  handleSubmit(event) {
    this.props.onAddComment(this.textInput.value);
    event.preventDefault();
  }
}

export default CommentBox;
