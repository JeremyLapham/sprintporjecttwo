import React, { useState } from 'react'
import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form, InputGroup, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { createAccount } from '../../Services/DataService';
import logo from '../../assets/logoSprint.png';

export default function CreateAccount() {
    let navigate = useNavigate();

    const [Username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setSonfirmPass] = useState('');
    const [Admin, setAdmin] = useState(false);
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])(?=.{8,})/;

    const handleCreate = async () => {
        //8 chacters, one capital letter, lowercase, number, special chancter, 
        if (confirmPass === password && Username !== null && password.match(regex)) {
            let userData = {
                Id: 0,
                Username,
                password,
                isAdmin: Admin
            }
            const GetLoggedInData = async () => {
                let result: boolean = await createAccount(userData)

                if (result) {
                    navigate('/');
                }
            }
            GetLoggedInData()
        } else {
            alert('Please make sure that you have entered a username and that your passwords match and make sure you followed the password directions');
        }
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleIsAdmin = (e) => {
        setIsChecked(e.target.checked);
        setAdmin(!isChecked);
    }
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Password</Popover.Header>
            <Popover.Body>
                Please make sure to have 8 characters, One Uppercase, One Lowercase, One number, and One Special Character
            </Popover.Body>
        </Popover>
    );

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
                                        placeholder="Codewars Login"
                                        className='passInput2'
                                        onChange={({ target: { value } }) => setUserName(value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Form.Group controlId="Password">
                                <InputGroup className='PassInput'>
                                    <InputGroup.Text className='iconMiddle'>
                                        <FontAwesomeIcon icon={faUnlockKeyhole} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className='passInput1'
                                        onChange={({ target: { value } }) => setPassword(value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                                    </OverlayTrigger>
                            <Form.Group controlId="ConfirmPassword">
                                <InputGroup className='passInputConfirm'>
                                    <InputGroup.Text className='icon'>
                                        <FontAwesomeIcon icon={faUnlockKeyhole} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        className='passInput3'
                                        onChange={({ target: { value } }) => setSonfirmPass(value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                        <Row className='d-flex align-items-center'>
                            <Col lg={3}>
                                <div>
                                    <input onClick={handleIsAdmin} className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" />
                                    <label className="react-switch-label" htmlFor={`react-switch-new`}>
                                        <span className={`react-switch-button`} />
                                    </label>
                                </div>
                            </Col>
                            <Col>
                                <span>Admin Account</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant='' className='signUpBtn' onClick={handleCreate}>SIGN UP</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6 className='toLog' onClick={() => navigate('/')}><Button variant='' className='toLogin'>Log in</Button> If you already have an account</h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}
