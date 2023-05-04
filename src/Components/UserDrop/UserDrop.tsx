import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'


const UserDrop = () => {
  return (
    <div>
          <Row className='infoDivTwo'>
      <Col>
      <p className='rChall' style={{color: 'white'}}>Random Challenge</p>

      </Col>
      <Col></Col>
    </Row>

    <Row >
      <Col></Col>
      <Col>
      <Accordion className='dBarOne'  defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
       <p>1</p>
       <p>2</p>
       <p>3</p>
       <p>4</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </Col>
    </Row>

    </div>
  )
}

export default UserDrop