import React, { useState } from "react";
import { Accordion, Col, Row, Button } from "react-bootstrap";
import "./Userdrop.css";




function UserDrop (props: { userData: {
  ranks: { overall: { name:string; color:string}}; codeChallenges: any; username: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; clan: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; honor: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; leaderboardPosition: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }) {


  return (
    <div>
      <Row className="infoDivTwo">
        <Col>
          <p className="rChall" style={{ color: "white" }}>
            Random Challenge
          </p>
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col className="dBarOne">

          {/* {props.userData.map((userData) =>(
            <div>{userData}</div>
          ))} */}
          <Accordion defaultActiveKey="0">

            <Accordion.Item eventKey="1">
              <Accordion.Header className={`${props.userData.ranks.overall.name}`}> {props.userData.ranks.overall.name}</Accordion.Header>
              <Accordion.Body className="dBox">
                <div>
                  <div>{props.userData.honor}</div>
                  <div>Leaderboard:{props.userData.leaderboardPosition}</div>
                  <div>Katas Completed:{props.userData.codeChallenges.totalCompleted}</div>
                  <div>Katas Authored:{props.userData.codeChallenges.totalAuthored}</div>
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
  );
};

export default UserDrop;
