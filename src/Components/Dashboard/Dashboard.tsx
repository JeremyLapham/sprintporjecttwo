import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import TopUser from '../TopUser/TopUser';
import { GetKataByUserName, GetKataData } from '../../Services/DataService';
import { MyContext } from '../context';
import logo from '../../assets/logoSprint.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import NotAdmin from '../notAdminComp/NotAdmin';

export default function Dashboard() {
  const navigate = useNavigate();
  const { username } = useContext(MyContext);
  const { isAdmin } = useContext(MyContext);
  const { userId } = useContext(MyContext);

  interface userData {
    codeChallenges: any; username: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; clan: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; honor: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; leaderboardPosition: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; ranks: { overall: { name: string; color: string } };
  }
  const [data, setData] = useState<userData>({
    codeChallenges: {}, username: null, name: null, clan: null, honor: null, leaderboardPosition: null, ranks: { overall: { name: '', color: '' } }
  });

  interface kata {
    id: number,
    personAssigned: string,
    userId: number,
    kataName: string,
    language: string,
    isReserved: boolean,
    isDeleted: boolean,
    isCompleted: boolean
  }

  const [kata, setKata] = useState<kata>({ 
    id: 1,
    personAssigned: "j",
    userId: 1,
    kataName: "j",
    language: "j",
    isReserved: false,
    isDeleted: false,
    isCompleted: false
  });

  useEffect(() => {
    const UsersKataData = async () => {
      const usersData = await GetKataData(username);
      const katas = await GetKataByUserName(username);
      setKata(katas);
      setData(usersData);
    };
    UsersKataData()
  }, []);

  return (
    <Container fluid className='dashBoard'>
      <div className='topBlock'>
        <Row>
          <Col>
            <img src={logo} className='logoDash' />
          </Col>
          <Col className='d-flex justify-content-end align-items-center'>
            <FontAwesomeIcon icon={faPowerOff} style={{ color: "#ffffff" }} size='lg' />
            <Button variant='' onClick={() => navigate('/')}><h3 style={{ color: 'white', fontSize: '24px' }}>Log Out</h3></Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 style={{ color: 'white' }}>CodeReserve</h3>
          </Col>
        </Row>
      </div>
      <div className='topBox'>
        <TopUser userData={data} />
      </div>
      <h1 style={{ color: 'white', zIndex: 100 }}>

        {isAdmin ? 'IM AN ADMIN' : <NotAdmin userKata={kata} />}
      </h1>
    </Container>
  )
}
