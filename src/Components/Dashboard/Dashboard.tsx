import React from 'react';
import './Dashboard.css';
import TopUser from '../TopUser/TopUser'
import UserDrop from '../UserDrop/UserDrop'



export default function Dashboard() {
  return (
    <div>
    <UserDrop />
    <TopUser />
    </div>
  )
}
