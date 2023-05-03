import React, { useContext, useEffect } from 'react';
import './Dashboard.css';
import TopUser from '../TopUser/TopUser';
import { GetKataData } from '../../Services/DataService';
import { MyContext } from '../context';

export default function Dashboard() {
  const { username } = useContext(MyContext);

  useEffect(() => {
    const UsersKataData = async () => {
      const usersData = await GetKataData(username);
      console.log(usersData);
    };
    UsersKataData()
  }, []);
  return (
    <div>
      <TopUser />
    </div>
  )
}
