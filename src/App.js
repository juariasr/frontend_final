import React, { Suspense } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import "./index.css";

const Register = React.lazy(() => import("./pages/register"));

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            Things
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
            </Nav>
            <Nav>
              <Link to="/register" className="nav-link">
                Registrarse
              </Link>
              <Link to="/" className="nav-link">
                Iniciar sesion
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Suspense fallback={<div>Cargando...</div>}>
              <Routes>
                <Route path="/register" element={<Register />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
      </Container>
    </>
  );
}
