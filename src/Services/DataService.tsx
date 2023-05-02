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
    const res = await fetch('https://kenblogapi.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });
}

export { createAccount, UserAPIFetch }