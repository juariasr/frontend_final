import React, { useEffect, useState } from "react";
import { getListTasks, createTask } from "../api/task";
import Task from "../components/task";
import { Modal, Button, Form } from "react-bootstrap";

export default function List() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const handleClose = () => setShow(false);

  function openDialog(id = 0) {
    setId(id);
    setShow(true);
  }

  async function GetTasks() {
    getListTasks()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function CreateOrUpdateTasks(event) {
    event.preventDefault();
    const { descripcion } = event.target.elements;
    if (id === 0) {
      createTask({ description: descripcion.value })
        .then((call) => setData([call.data, ...data]))
        .catch((error) => {
          alert(error);
        });
    }
  }

  useEffect(() => {
    GetTasks();
  }, []);

  return (
    <>
      <Button
        className="formulario"
        variant="primary"
        onClick={() => openDialog()}
      >
        Crear Tarea
      </Button>
      {data.map((item) => {
        return (
          <Task
            key={item._id}
            id={item._id}
            description={item.description}
            done={item.done}
          />
        );
      })}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Crear Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={CreateOrUpdateTasks}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                placeholder="Descripcion"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Crear
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
