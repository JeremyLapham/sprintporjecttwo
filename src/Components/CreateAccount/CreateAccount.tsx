import React, { useState } from 'react'
import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { createAccount } from '../../Services/DataService';

export default function CreateAccount() {
    let navigate = useNavigate();

    const [Username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleCreate = async () => {
        let userData = {
            Id: 0,
            Username,
            password
        }
        const GetLoggedInData = async () => {
            let result: any = await createAccount(userData)

            if (result) {
                navigate('/');
            }
        }
        GetLoggedInData()
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
                                <Button variant='' className='signInBtn' onClick={handleCreate}>SIGN UP</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}
