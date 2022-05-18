import React, { useEffect, useState } from "react";
import { getListTasks, createTask, updateTask } from "../api/task";
import Task from "../components/task";
import { Modal, Button, Form } from "react-bootstrap";

export default function List() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");
  const handleClose = () => setShow(false);

  function openDialog(id = 0) {
    setId(id);
    if (id !== 0) {
      const tasks = data.filter((value) => value._id === id);
      setDescription(tasks[0].description);
    }
    setShow(true);
  }

  function modifyData(call) {
    let array = [...data];
    const item = array.findIndex((task) => {
      return task._id === call.data._id;
    });

    array[item] = call.data;
    setData(array);
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
    } else {
      updateTask({ id: id, description: descripcion.value })
        .then((call) => modifyData(call))
        .catch((error) => {
          alert(error);
        });
    }

    setShow(false);
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
            edit={openDialog}
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
          <Modal.Title>{id === 0 ? "Crear Tarea" : "Editar Tarea"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={CreateOrUpdateTasks}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                placeholder="Descripcion"
                defaultValue={description}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="icon">
              {id === 0 ? "Crear" : "Editar"}
            </Button>
            <Button variant="secondary" onClick={handleClose} className="icon">
              Cerrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
