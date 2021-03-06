import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getUserRatings } from '../actions/getUserRatings';


const CommentContainer=styled.div`
  width: 100%;
  border: solid 1px white;
  border-radius: 3px;
  background-color: rgba(255,255,255,0.3);
  font-size: 1em;
  margin-top: 10px;
  padding: 10px;
  color: white;
`;


const UserCommentsList= () => {
  const dispatch = useDispatch()
  const getUserRatingsSelector = useSelector((state)=> state.getUserRatings)
  const actionGetUserRatings = () => dispatch(getUserRatings())

  useEffect(() => {
    actionGetUserRatings()
  },[])

  return (
    <>
    {getUserRatingsSelector && getUserRatingsSelector.userRatings.map((user, index) => (
      <CommentContainer key={index}>
        <h3>{`${user.data.name}`}</h3>
        <p>{`${user.data.comment}`}</p>
        <p>{`${user.data.starRating}`}</p>
      </CommentContainer>
    ))}
    </>
  )
}
export default UserCommentsList;
