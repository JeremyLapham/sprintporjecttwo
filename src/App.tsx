import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Components/loginComponent/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import { MyContext } from './Components/context';

function App() {
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState([]);
  return (
    <div className='font'>
      <MyContext.Provider value={{ username, setUsername, isAdmin, setIsAdmin }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='createAccount' element={<CreateAccount />} />
            <Route path='Dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
