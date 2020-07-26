import React, { Component } from "react";
import { Button } from "react-bootstrap";

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
      <React.Fragment>
        <Button variant="primary" onClick={this.increaseLikes}>
          Like {this.state.likes}
        </Button>
      </React.Fragment>
    );
  }

  increaseLikes() {
    this.setState({
      likes: ++this.state.likes,
    });
  }
}

export default LikeButton;
