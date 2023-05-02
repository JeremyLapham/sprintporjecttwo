import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

let codeWarsData: any = '';

async function UserAPIFetch ()
{
    let res = await fetch(`https://www.codewars.com/api/v1/users/ricRobo4`);
    let data = await res.json();
    codeWarsData = data;
    // console.log(data.id);
    // console.log(data.username);
    // console.log(data.name);
    // console.log(data.honor);
    console.log(codeWarsData);
}

function Test () {

    return(
        <Container>
            <Row>
                <Col>
                    <button onClick={UserAPIFetch}>Get API Data</button>     
                </Col>
            </Row>
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    );
}

export { Test, UserAPIFetch }