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

async function createAccount(createdUser){
    const res = await fetch('https://sprintwarshost.azurewebsites.net/user/adduser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });

    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
}




export { createAccount, UserAPIFetch }