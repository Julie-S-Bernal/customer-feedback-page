import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const configuration = {
    apiKey: "AIzaSyCHzzNSC8Jz7y3mrGUsje-lVm_Sw9w9RNE",
    authDomain: "to-do-list-challenge.firebaseapp.com",
    databaseURL: "https://to-do-list-challenge.firebaseio.com",
    projectId: "to-do-list-challenge",
    storageBucket: "to-do-list-challenge.appspot.com",
    messagingSenderId: "690206682060",
    appId: "1:690206682060:web:8866e04172fb76152c0b69"
};

class FirebaseConfig{
    constructor(){
        firebase.initializeApp(configuration);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async createUserRating(userRating){
        let newUserRating = {
            name: userRating.id,
            email: userRating.email,
            // description: userRating.rating,
            comment: userRating.comment,
        }
        const createdUserRating = await firebase.firestore().collection('userRating').add(newUserRating).catch(error => {
          console.log(error);
        });
        console.log('I am created')
        return createdUserRating;
        }

        async getUserRatings(){
            let getUserRatingItems = [];
            const userRatings = await firebase.firestore().collection('userRating').get()
            userRatings.forEach(item => {
                getUserRatingItems.push({id:item.id, data:item.data() });
            })
            console.log('You can get me');
            return getUserRatingItems;
        }

        async getUserRating(userRatingId){
            const userRating = await firebase.firestore().collection('userRating').doc([userRatingId].get());
            const userRatingItem = userRating.data();
            console.log('you can get a single item');
            return userRatingItem;
        }
}


export default new FirebaseConfig();
