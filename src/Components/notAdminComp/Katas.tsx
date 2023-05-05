import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function Katas(props: { userKata: any; }) {
    const katas = props.userKata;
    console.log(katas)

    return (
        <Container>
            <Row className='kataBG'>
                <Col>
                    This is {katas[0].id}
                </Col>
                <Col>
                    This is {katas[0].kataName}
                </Col>
                <Col>
                    This is {katas[0].language}
                </Col>
                <Col>
                    This is {katas[0].personAssigned}
                </Col>
                <Col>
                    This is {katas[0].userId}
                </Col>
            </Row>
        </Container>
    )
}
