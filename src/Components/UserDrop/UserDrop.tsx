import React from 'react'
import { Accordion, Col, Row,Button } from 'react-bootstrap'
import './Userdrop.css';

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
      <Col className='dBarOne' >

      <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>6kyu UserName</Accordion.Header>
        <Accordion.Body className='dBox'>
          <div >
           <div >Honor:174</div >
       <div >Leaderboard Position:#365,751</div >
       <div >Katas Completed:12</div >
       <div >Katas Authored:2</div > 
          </div>
          <div>
            <Button>Reserve Kata</Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>7kyu UserName</Accordion.Header>
        <Accordion.Body className='dBox'>
          <div >
           <div >Honor:174</div >
       <div >Leaderboard Position:#365,751</div >
       <div >Katas Completed:12</div >
       <div >Katas Authored:2</div > 
          </div>
          <div>
            <Button>Reserve Kata</Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>4kyu UserName</Accordion.Header>
        <Accordion.Body className='dBox'>
          <div >
           <div >Honor:174</div >
       <div >Leaderboard Position:#365,751</div >
       <div >Katas Completed:12</div >
       <div >Katas Authored:2</div > 
          </div>
          <div>
            <Button>Reserve Kata</Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>7kyu UserName</Accordion.Header>
        <Accordion.Body className='dBox'>
          <div >
           <div >Honor:174</div >
       <div >Leaderboard Position:#365,751</div >
       <div >Katas Completed:12</div >
       <div >Katas Authored:2</div > 
          </div>
          <div>
            <Button>Reserve Kata</Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>2kyu UserName</Accordion.Header>
        <Accordion.Body className='dBox'>
          <div >
           <div >Honor:174</div >
       <div >Leaderboard Position:#365,751</div >
       <div >Katas Completed:12</div >
       <div >Katas Authored:2</div > 
          </div>
          <div>
            <Button>Reserve Kata</Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            </Col>
    </Row>

    </div>
  )
}

export default UserDrop