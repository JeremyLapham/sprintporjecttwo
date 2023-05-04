import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { KataLanguage } from './KataLanguageDisplay'
import './KataDisplay.css'

function KataDisplayComponent() {
  return (
    <Container className='kata-display-body'>
        <Row>
            <Col>
                <Row className='kata-info-row'>
                    <Col>
                        <Row className='kata-title-kyu'>
                            <Col xs={3}>6 Kyu</Col>
                            <Col>
                                Kata Title here
                                AuthorOfThisKata
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <button>Reserve Kata</button>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row className='kata-languages'>
                    <Col>C#</Col>
                    <Col>JS</Col>
                    <Col>CPP</Col>
                    <Col>TS</Col>
                    <Col>PY</Col>
                    <Col>RS</Col>
                    <Col>RB</Col>
                    <Col>JAVA</Col>
                    <Col>HS</Col>
                    <Col>PHP</Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                Kata Description
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis suscipit lorem, eget cursus elit. Ut aliquet metus urna, et ultrices dolor tristique eget.</p>
            </Col>
        </Row>
    </Container>
  )
}

export { KataDisplayComponent }