import React from "react";
import { Card } from "react-bootstrap";

export default function Task({ id = "", description = "", done = false }) {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Task # {id}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex">Acciones</div>
      </Card.Body>
    </Card>
  );
}
