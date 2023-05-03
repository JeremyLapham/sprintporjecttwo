import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

let codeWarsUserData: any = '';
let codeWarsKataData: any = '';

async function UserAPIFetch ()
{
    let res = await fetch(`https://www.codewars.com/api/v1/users/ricRobo4`);
    let data = await res.json();
    codeWarsUserData = data;
    console.log(codeWarsUserData);
    console.log('Rank: ' + codeWarsUserData.ranks.overall.rank);
    console.log('Username: ' + codeWarsUserData.username);
    console.log('Name: ' + codeWarsUserData.name);
    console.log('Honor: ' + codeWarsUserData.honor);
    console.log('Clan: ' + codeWarsUserData.clan);
    console.log('LeaderBoard Position: ' + codeWarsUserData.leaderboardPosition);
    console.log('Total Authored Katas: ' + codeWarsUserData.codeChallenges.totalAuthored);
    console.log('Total Completed Katas: ' + codeWarsUserData.codeChallenges.totalCompleted);
}

async function KataAPIFetch ()
{
    let res = await fetch(`https://www.codewars.com/api/v1/code-challenges/5556282156230d0e5e000089`);
    let data = await res.json();
    codeWarsKataData = data;
    console.log(codeWarsKataData);
    console.log(codeWarsKataData.rank.name);
    console.log('Title: ' + codeWarsKataData.name);
    console.log('Author: ' + codeWarsKataData.createdBy.username);
    console.log('Languages Available: ' + codeWarsKataData.languages);
    console.log('Description: ' + codeWarsKataData.description);
}

// function Test () {

//     return(
//         <Container>
//             <Row>
//                 <Col>
//                     <button onClick={UserAPIFetch}>Get API Data</button>     
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
                    
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

export { UserAPIFetch, KataAPIFetch }