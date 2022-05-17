import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerApi } from "../api/user";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  async function Register(event) {
    event.preventDefault();
    const { nombre, apellido, email, password } = event.target.elements;
    registerApi({
      firstname: nombre.value,
      lastname: apellido.value,
      email: email.value,
      password: password.value,
    })
      .then((data) => {
        alert("Usuario registrado exitosamente");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <h2 className="formulario">Formulario de Registro</h2>
      <Form onSubmit={Register}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" name="apellido" placeholder="Apellido" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo Electronico"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  );
}
