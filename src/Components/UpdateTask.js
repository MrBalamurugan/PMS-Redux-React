import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdateTaskModal = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTask = () => {
    props.onHide();
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter the task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task...."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-end">
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => updateTask(e)}
            >
              Update Task
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTaskModal;
