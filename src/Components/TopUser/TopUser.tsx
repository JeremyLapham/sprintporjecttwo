import { Col, Container, Row, Form, Button, Accordion } from 'react-bootstrap';
import './TopUser.css';

import React from 'react'

const TopUser = () => {
  return (
   <Container className='infoDiv'>
    <Row >
      <Col>
      <p className='kyu'>2Kyu</p> 
      </Col>
      <Col>
      <p className='adminName'>AdminGoesHere</p>
      </Col>
    </Row>
    <Row className='tText'>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Name:</span> Cody Coderson</p>
      </Col>
      <Col>
     <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Clan:</span> CodestackAcademy</p>
      </Col>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Total Completed Kata:</span>124</p>
      </Col>
    </Row>
    <Row className='bText'>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Honor:</span> 273</p>
      </Col>
      <Col>
     <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Leaderboard Position:</span> #310,746</p>
      </Col>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Total Authored Kata:</span> 4</p>
      </Col>
    </Row>

  
   </Container>
    
  )
}

export default TopUser