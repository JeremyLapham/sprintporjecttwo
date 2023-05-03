import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import TopUser from '../TopUser/TopUser';
import { GetKataData } from '../../Services/DataService';
import { MyContext } from '../context';

export default function Dashboard() {
  const { username } = useContext(MyContext);
  const [data, setData] = useState({});

  useEffect(() => {
    const UsersKataData = async () => {
      const usersData = await GetKataData(username);
      console.log(usersData)
      setData(usersData);
    };
    UsersKataData()
  }, []);
  return (
    <div>
      <TopUser />
    </div>
  )
}
