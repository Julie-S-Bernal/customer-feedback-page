import firebaseConfig from '../firebase/firebaseConfig';


export const getUserRatings = () => {
    return async function(dispatch){
        const userRatings = await firebaseConfig.getUserRatings();
        dispatch({type:'GET_USER_RATINGS', payload: userRatings})
    }
}
