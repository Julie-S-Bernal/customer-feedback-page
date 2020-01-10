import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const configuration = {
    apiKey: "AIzaSyDm7k9BI98P853lhJ8baHacswjvE5Bn0JI",
    authDomain: "customer-feedback-page.firebaseapp.com",
    databaseURL: "https://customer-feedback-page.firebaseio.com",
    projectId: "customer-feedback-page",
    storageBucket: "customer-feedback-page.appspot.com",
    messagingSenderId: "1076764338532",
    appId: "1:1076764338532:web:d35217a13a127201093271"
};

class FirebaseConfig{
    constructor(){
        firebase.initializeApp(configuration);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async createUserRating(userRating){
        let newUserRating = {
            name: userRating.name,
            email: userRating.email,
            starRating: userRating.starRating,
            comment: userRating.comment,
        }
        const createdUserRating = await firebase.firestore().collection('userRating').add(newUserRating).catch(error => {
          console.log(error);
        });
        return createdUserRating;
        }

        async getUserRatings(){
            let getUserRatingItems = [];
            const userRatings = await firebase.firestore().collection('userRating').get()
            userRatings.forEach(item => {
                getUserRatingItems.push({id:item.id, data:item.data() });
            })
            return getUserRatingItems;
        }
}


export default new FirebaseConfig();
