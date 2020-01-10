import { combineReducers } from 'redux';

import createUserRating from './createUserRating';
import getUserRatings from './getUserRatings';


const reducers = combineReducers({
  createUserRating,
  getUserRatings,
});

export default reducers;
