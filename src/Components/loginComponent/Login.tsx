import React, { useState } from 'react'
import './Login.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import TopUser from '../TopUser/TopUser';
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
        <Container fluid className='loginBG d-flex align-items-center justify-content-center'>
            <TopUser />
            <Row>
                <Col>
                    <div className='boxBG d-flex flex-column align-items-center'>
                        <Row>
                            <Col>
                                <h2 className='codeMasterTxt'>CodeMaster</h2>

                            </Col>
                        </Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="Username">
                                <Form.Control
                                    className='userInput'
                                    type="text"
                                    placeholder="Username"
                                    onChange={({ target: { value } }) => setUserName(value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Password">
                                <Form.Control
                                    className='passInput'
                                    type="password"
                                    placeholder="Password"
                                    onChange={({ target: { value } }) => setPassword(value)}
                                />
                            </Form.Group>
                        </Form>
                        <Row>
                            <Col>
                                <Button variant='' className='signInBtn' onClick={handleLogin}>SIGN IN</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
