import React from "react";
import { Card } from "react-bootstrap";
import { FaCheckCircle, FaEdit } from "react-icons/fa";

export default function Task(params) {
  const { id = "", description = "", done = false, edit } = params;
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Task # {id}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Estado: {done ? "Realizada" : "Pendiente"}</Card.Text>
        <div className="d-flex">
          <FaEdit className="icon" onClick={() => edit(id)} />
          <FaCheckCircle className="icon" onClick={() => edit(id, true)} />
        </div>
      </Card.Body>
    </Card>
  );
}
