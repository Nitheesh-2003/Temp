import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCGw9q3Q16q5ko25REmWbArmV-Shxli2xs",
  authDomain: "social-media-react-796e0.firebaseapp.com",
  projectId: "social-media-react-796e0",
  storageBucket: "social-media-react-796e0.appspot.com",
  messagingSenderId: "191165954402",
  appId: "1:191165954402:web:d0ffb4226d583a49c4943b",
  measurementId: "G-LCBDQDV6P8"
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export {db , auth, storage};

