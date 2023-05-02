import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Components/loginComponent/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='font'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='createAccount' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
