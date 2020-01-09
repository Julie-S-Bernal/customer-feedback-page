import firebaseConfig from '../firebase/firebaseConfig';


export const createUserRating = (userRating) => {
    return async function(dispatch){
        const storeUserRating = await firebaseConfig.createUserRating(userRating);
        dispatch({type: "CREATE_TO_DO", payload: storeUserRating});
    }
}
