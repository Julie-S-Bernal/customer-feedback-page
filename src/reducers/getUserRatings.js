const getUserRatings=(
    state={
      userRatings:[],
    },
    action)=>{
        if(action.type === 'GET_USER_RATINGS'){
            state={...state, userRatings:action.payload}
        }
        return state
    };
export default getUserRatings;
