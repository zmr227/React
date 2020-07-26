import React, { Component } from "react";
import { Alert, Badge } from "react-bootstrap";

class NameCard extends Component {
  render() {
    const { name, phone, isHuman, tags } = this.props;
    return (
      <Alert variant="primary">
        <h4>{name}</h4>
        <ul>
          <li>phone: {phone}</li>
          <li>{isHuman ? "human" : "alien"}</li>
        </ul>
        <hr />
        <h5>
          {tags.map((tag, index) => (
            <span key={index}>
              <Badge pill variant="info" key={index}>
                {tag}
              </Badge>{" "}
            </span>
          ))}
        </h5>
      </Alert>
    );
  }
}

export default NameCard;
