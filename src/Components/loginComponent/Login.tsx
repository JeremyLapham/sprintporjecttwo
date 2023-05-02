import React, { useState } from 'react'
import './Login.css';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();

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
            <Row>
                <Col>
                    <div className='boxBG d-flex flex-column align-items-center'>
                        <Row>
                            <Col>
                                <h2 className='codeMasterTxt'>CodeReserve</h2>

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
                            <Form.Group controlId="Password">
                                <InputGroup className='passInput'>
                                    <InputGroup.Text className='icon'>
                                        <FontAwesomeIcon icon={faUnlockKeyhole} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className='passInput2'
                                        onChange={({ target: { value } }) => setPassword(value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                        <Row>
                            <Col>
                                <Button variant='' className='signInBtn' onClick={handleLogin}>SIGN IN</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>Don't have an account? <Button className='toSignUpBtn' variant=''>Sign Up Here</Button></h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
