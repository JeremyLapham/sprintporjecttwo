import React, { useState } from 'react'
import './Login.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        let userData = {
            userName,
            password
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col>
                    <input onChange={({ target: { value } }) => setUserName(value)} value={userName} placeholder='Enter your username' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <input onChange={({ target: { value } }) => setPassword(value)} value={password} placeholder='Enter your password' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handleLogin}>Log In</Button>
                </Col>
            </Row>
        </Container>
    )
}
