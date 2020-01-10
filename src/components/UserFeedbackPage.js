
import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import { getUserRatings } from '../actions/getUserRatings';

import UserForm from './UserForm';
import UserRatingChart from './userRatingChart';
import UserCommentsList from './UserCommentsList'


const UserFeedbackPage= () => {
  // const dispatch = useDispatch()
  //   const getUserRatingsSelector = useSelector((state)=> state.getUserRatings)
  //   const actionGetUserRatings = () => dispatch(getUserRatings())

  //   useEffect(() => {
  //     actionGetUserRatings()
  //   },[])

  // console.log('here', getUserRatingsSelector)

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
