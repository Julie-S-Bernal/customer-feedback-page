
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FA from 'react-fontawesome';

import VerticalSpacing from '../styles/VerticalSpacing';
import { createUserRating } from '../actions/createUserRating';
import { getUserRatings } from '../actions/getUserRatings';


const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const stars = [1,2,3,4,5]
  const [starRating, setStarRating] = useState(0);
  const [onHoverStar, setOnHoverStar] = useState(0);


  const dispatch= useDispatch();
  const actionCreateUserRating = (userRating) => dispatch(createUserRating(userRating))
  const actionGetUserRatings = () => dispatch(getUserRatings())

  const createNewUserRating= async(e) => {
    e.preventDefault();
    const userRating = starRating + 1;

    let newUserRating = {
      name,
      email,
      starRating: userRating,
      comment,
    }
    console.log('starRating', starRating);
    await actionCreateUserRating(newUserRating)
    await actionGetUserRatings()
  }
  console.log('starRating', starRating)

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
        <label htmlFor='email'>Rate me from 1 to 5 stars: </label>
        <VerticalSpacing />
        {stars.map((star, index, key)=>(
          <div
            key={index}
            className="star"
            starId={index}
            rating={starRating || onHoverStar}
            onMouseEnter={() => setOnHoverStar(index)}
            onMouseLeave={() => setOnHoverStar(0)}
            onClick={() => setStarRating((index))}
            style={{float: 'left', paddingBottom: '10px'}}
          >
            <FA name="star"
              size="2x"
              //To Do make them black of yellow depending their state
              style={starRating && starRating >= index ? {color:'yellow'} : {color:'white'}}
            />
          </div>
        ))}
        <input className='formInput'type="text" name='comment' placeholder='Leave a comment...' onChange={(event) => setComment(event.target.value)} ></input>
        <VerticalSpacing />
        <input className='button' type='submit' value='Submit Rating' />
      </form>
    </>
  )
}
export default UserForm;
