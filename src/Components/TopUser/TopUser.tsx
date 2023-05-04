import { Col, Container, Row } from 'react-bootstrap';
import './TopUser.css';

import React from 'react'

const TopUser = (props: { userData: {
  ranks: { overall: { name:string; color:string}}; codeChallenges: any; username: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; clan: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; honor: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; leaderboardPosition: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }
  ) => {
  return (
   <Container className='infoDiv'>
    <Row >
      <Col>
      <p className={`${props.userData.ranks.overall.color}`}>{props.userData.ranks.overall.name}</p> 
      </Col>
      <Col>
      <p className='adminName'>{props.userData.username}</p>
      </Col>
    </Row>
    <Row className='tText'>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Name:</span> {props.userData.name}</p>
      </Col>
      <Col>
     <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Clan:</span> {props.userData.clan}</p>
      </Col>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Total Completed Kata:</span> {props.userData.codeChallenges.totalCompleted} </p>
      </Col>
    </Row>
    <Row className='bText'>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Honor:</span> {props.userData.honor}</p>
      </Col>
      <Col>
     <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Leaderboard Position:</span> #{props.userData.leaderboardPosition}</p>
      </Col>
      <Col>
      <p style={{color: 'white'}}><span style={{ color: 'gray' }}>Total Authored Kata:</span> {props.userData.codeChallenges.totalAuthored}</p>
      </Col>
    </Row>

   </Container>
    
  )
}

export default TopUser