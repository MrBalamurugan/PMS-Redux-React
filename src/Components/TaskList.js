import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import UpdateTaskModal from "./UpdateTask";

const TaskList = () => {
  const [modalShow, setModalShow] = useState(false);

  const updateTask = () => {
    console.log("Updated..,");
    setModalShow(true);
  };

  const deleteTask = () => {
    console.log("Deleted..,");
  };

  return (
    <>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button variant="primary" onClick={() => updateTask()}>
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button variant="primary" onClick={() => deleteTask()}>
                <i className="bi bi-trash"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <UpdateTaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default TaskList;
