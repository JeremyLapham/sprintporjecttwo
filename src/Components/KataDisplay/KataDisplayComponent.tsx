import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { KataLanguage } from './KataLanguageDisplay'
import { KataLanguagesComponent } from './KataLanguagesComponent'
import './KataDisplay.css'

interface CodeWarsProps {
    kyu: string;
    kataTitle: string;
    kataAuthor: string;
    kataDesc: string;
}

function KataDisplayComponent({ kyu, kataTitle, kataAuthor, kataDesc}: CodeWarsProps) {
    // let kyu: string = '6 Kyu'
    // let kataTitle: string = 'Kata Title';
    // let kataAuthor: string = 'KataAuthor';
    // let kataDesc: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis suscipit lorem, eget cursus elit. Ut aliquet metus urna, et ultrices dolor tristique eget.';
  return (
    <Container className='kata-display-body'>
        <Row>
            <Col>
                <Row className='kata-info-row'>
                    <Col>
                        <Row className='kata-title-kyu'>
                            <Col xs={3}>{kyu}</Col>
                            <Col>
                                {kataTitle}
                                <br />
                                {kataAuthor}
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
                    <Col>
                        <KataLanguagesComponent language={'cpp'} />
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                Kata Description
                <p>{kataDesc}</p>
            </Col>
        </Row>
    </Container>
  )
}

export { KataDisplayComponent }