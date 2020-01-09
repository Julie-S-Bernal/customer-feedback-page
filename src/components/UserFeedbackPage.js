
import React from 'react';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import UserForm from './UserForm';
import UserRatingChart from './userRatingChart';


const UserFeedbackPage= (props) => {

  return (
    <Container>
      <Row>
        <Col col={6}>
          <UserForm />
        </Col>
        <Col col={6}>
          <UserRatingChart />
        </Col>
      </Row>
    </Container>
  )
}
export default UserFeedbackPage;
