
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import VerticalSpacing from '../styles/VerticalSpacing';
import { createUserRating } from '../actions/createUserRating';


const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [starRating, setStarRating] = useState();
  const [comment, setComment] = useState('');


  const dispatch= useDispatch();
  const actionCreateUserRating = (userRating) => dispatch(createUserRating(userRating))

  const createNewUserRating= async(e) => {
    e.preventDefault();

    let newUserRating = {
      name,
      email,
     //  TODO Add rating once logic is implemented
      comment,
    }
    await actionCreateUserRating(newUserRating)
  }

  return (
    <>
      <form onSubmit={createNewUserRating}>
        <label htmlFor='name'>Name: </label>
        <VerticalSpacing />
        <input className='formInput' type="text" name='name' onChange={(event) => setName(event.target.value)} ></input>
        <VerticalSpacing />
        <label htmlFor='email'>Email: </label>
        <VerticalSpacing />
        <input className='formInput'type="text" name='email' onChange={(event) => setEmail(event.target.value)} ></input>
        <VerticalSpacing />
        <label htmlFor='email'>Rate me: </label>
        <VerticalSpacing />
        {/* //TODO: Add star logic */}
        <input className='formInput'type="text" name='comment' placeholder='Leave a comment...' onChange={(event) => setComment(event.target.value)} ></input>
        <VerticalSpacing />
        <input className='button' type='submit' value='Submit Rating' />
      </form>
    </>
  )
}
export default UserForm;
