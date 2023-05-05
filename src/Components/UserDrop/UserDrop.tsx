import React from "react";
import { Accordion, Col, Row, Button } from "react-bootstrap";
import "./Userdrop.css";




function UserDrop (props) {
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

          <Accordion defaultActiveKey="0">

            <Accordion.Item eventKey="1">
              <Accordion.Header>{props.kyu} {props.name}</Accordion.Header>
              <Accordion.Body className="dBox">
                <div>
                  <div>Honor:{props.honor}</div>
                  <div>Leaderboard:{props.leaderboard}</div>
                  <div>Katas Completed:{props.completedKatas}</div>
                  <div>Katas Authored:{props.authoredKatas}</div>
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
