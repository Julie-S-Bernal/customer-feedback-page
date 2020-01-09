import { combineReducers } from 'redux';

import createUserRating from './createUserRating';
// import getUserRatings from './getToDos';
// import getUserrating from './getToDo';


const reducers = combineReducers({
  createUserRating,
//   getUserRatings,
//   getUserrating,
});

export default reducers;
