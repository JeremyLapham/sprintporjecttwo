import React, { useState } from 'react';
import './NotAdmin.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Katas from './Katas';

export default function NotAdmin(props) {
    const [activeBtn, setActiveBtn] = useState('');

    const handleButtonClick = (buttonName: string) => {
        setActiveBtn(buttonName);
    };

    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button variant='' className={`${activeBtn === 'Kata' ? 'clickedNotAdminBtn' : 'notAdminBtn'}`}
                        onClick={() => handleButtonClick('Kata')}>Kata</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button variant='' className={`${activeBtn === 'Completed' ? 'clickedNotAdminBtn' : 'notAdminBtn'}`}
                        onClick={() => handleButtonClick('Completed')}>Completed</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button variant='' className={`${activeBtn === 'Unfinished' ? 'clickedNotAdminBtn' : 'notAdminBtn'}`}
                        onClick={() => handleButtonClick('Unfinished')}>Unfinished</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button variant='' className={`${activeBtn === 'Authored' ? 'clickedNotAdminBtn' : 'notAdminBtn'}`}
                        onClick={() => handleButtonClick('Authored')}>Authored</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>

                </Col>
                <Col lg={8}>
                    <Katas />
                </Col>
            </Row>
        </Container>
    )
}
