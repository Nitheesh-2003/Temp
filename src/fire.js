import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGw9q3Q16q5ko25REmWbArmV",
    authDomain: "social-media-react-796e0.firebaseapp.com",
    projectId: "social-media-react-796e0",
    storageBucket: "social-media-react-796e0.appspot.com",
    messagingSenderId: "191165954402",
    appId: "1:191165954402:web:d0ffb4226d583a49c4943b",
    measurementId: "G-LCBDQDV6P8"
};

//init firebase app
const firebaseApp=initializeApp(firebaseConfig);

//init services 
const db=getFirestore(firebaseApp);

//collection reference
const colRef=collection(db,"post");

//get collection data
getDocs(colRef)
    .then((snapshot)=>{
        let books=[];
        snapshot.docs.forEach((doc)=>{
            books.push({...doc.data(),id:doc.id})
        })
        console.log(books);
    })
    .catch((error)=>{
        console.log(error.message);
    })
