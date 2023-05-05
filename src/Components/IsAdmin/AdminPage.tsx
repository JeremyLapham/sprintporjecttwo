import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AdminFilter from './AdminFilter';
import Userdrop from '../UserDrop/UserDrop'

export default function AdminPage() {
  return (
    <Container>
        <Row>
            <Col lg={4}>
        <AdminFilter />
            </Col>
            <Col lg={8}>
                {/* <Userdrop /> */}
            </Col>
        </Row>
        </Container>
  )
}
