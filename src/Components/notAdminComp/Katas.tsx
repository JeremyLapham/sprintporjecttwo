import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface Kata {
  id: number;
  personAssigned: string;
  userId: number;
  kataName: string;
  language: string;
  isReserved: boolean;
  isDeleted: boolean;
  isCompleted: boolean;
}

export default function Katas(props: { userKata: Kata[] }) {
  const [katas, setKatas] = useState<Kata[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setKatas(props.userKata);
    }, 2000);
  }, [props.userKata]);

  return (
    <Container>
      {katas.length > 0 ? (
        <Row className='kataBG'>
          {katas.filter((kataItem) => !kataItem.isCompleted).map((kata) => (
              <Col key={kata.id}>
              <div>This is {kata.kataName}</div>
              <div>In language {kata.language}</div>
              <div>Assigned To  {kata.personAssigned}</div>
            </Col>
          ))}
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}