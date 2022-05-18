import React from "react";
import { Form, Button } from "react-bootstrap";

export default function signin() {
  return (
    <div><Form>
    <Form.Group className="mb-3">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
      <Form.Text className="text-muted">
        We'll never share your user name with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}


