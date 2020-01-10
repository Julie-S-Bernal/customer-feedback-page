import { combineReducers } from 'redux';

import createUserRating from './createUserRating';
import getUserRatings from './getUserRatings';
// import getUserRating from './getUserRating ';


const reducers = combineReducers({
  createUserRating,
  getUserRatings,
//   getUserRating,
});

export default reducers;
