import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import CreateAccount from './Components/CreateAccount/CreateAccount';

function App() {
  return (
    <Container>
      <CreateAccount/>
    </Container>
  );
}

export default App;
