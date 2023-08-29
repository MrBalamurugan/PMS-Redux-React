import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import AddTask from "./Components/AddTask";
import NavBar from "./Components/NavBar";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <Container>
      <NavBar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
