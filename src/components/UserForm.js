
import React, { useState } from 'react';
import VerticalSpacing from '../styles/VerticalSpacing';


const UserForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [coment, setComment] = useState('');

  return (
    <>
      <form>
        <h2 style={{textAlign: 'center'}}>Please Rate the Form!</h2>
        <label htmlFor='Name'>Name: </label>
        <VerticalSpacing />
        <input className='formInput' type="text" name='Name' onChange={(event) => setName(event.target.value)} ></input>
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
