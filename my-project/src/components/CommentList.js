import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const CommentList = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((comment, index) => (
        <ListGroupItem key={index}>{comment}</ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default CommentList;
