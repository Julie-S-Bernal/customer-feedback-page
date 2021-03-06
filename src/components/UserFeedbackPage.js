
import React from 'react';
import { Container, Col, Row } from 'styled-bootstrap-grid';

import UserForm from './UserForm';
import UserRatingChart from './userRatingChart';
import UserCommentsList from './UserCommentsList'


const UserFeedbackPage= () => {

  return (
    <Container>
      <Row>
        <Col col={12}>
          <h2>Rate the Form!</h2>
        </Col>
      </Row>
      <Row>
        <Col col={6}>
          <UserForm />
        </Col>
        <Col col={6}>
          <UserRatingChart />
        </Col>
      </Row>
      <Row>
        <Col col={12}>
          <UserCommentsList />
        </Col>
      </Row>
    </Container>
  )
}
export default UserFeedbackPage;
