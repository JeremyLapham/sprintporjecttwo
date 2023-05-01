import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Components/loginComponent/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <Login />
        <CreateAccount />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
