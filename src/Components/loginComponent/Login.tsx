import React, { useState, useContext } from 'react'
import './Login.css';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoSprint.png';
import { LoginUser } from '../../Services/DataService';
import { MyContext } from '../context';
import { GetUserIsAdmin } from '../../Services/DataService';

export default function Login() {
    const { setUsername } = useContext(MyContext);
    const { setIsAdmin } = useContext(MyContext);

    let navigate = useNavigate();

    const [Username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        let userData = {
            Username,
            password
        }
        const user = await GetUserIsAdmin(Username);
        setIsAdmin(user.isAdmin);
        setUsername(Username);
        let token = await LoginUser(userData);
        if (token.token != null) {
            localStorage.setItem("Token", token.token);
            navigate('/DashBoard');
        }
    }
    return (
        <Container fluid className='loginBG d-flex align-items-center justify-content-center'>
            <Row>
                <Col>
                    <div className='boxBG d-flex flex-column align-items-center'>
                        <Row>
                            <Col className='logo'>
                                <img src={logo} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className='codeMasterTxt'>CodeReserve</h2>

                            </Col>
                        </Row>
                        <Form>
                            <Form.Group controlId="Username">
                                <InputGroup className='userInput'>
                                    <InputGroup.Text className='icon'>
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        className='passInput2'
                                        onChange={({ target: { value } }) => setUserName(value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="Password">
                                <InputGroup className='passInputConfirm'>
                                    <InputGroup.Text className='icon'>
                                        <FontAwesomeIcon icon={faUnlockKeyhole} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className='passInput3'
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
                                <h6 className='toSign'><Button className='toSignUpBtn' onClick={() => navigate('/createAccount')} variant=''>Sign Up</Button> if you don't have an account yet </h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
