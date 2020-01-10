const createUserRating = (
    state={
      userRating: {}
    },
    action) => {
      if(action.type === 'CREATE_USER_RATING'){
        state={...state, userRating: action.payload}
      }
      return state;
  }

  export default createUserRating;
