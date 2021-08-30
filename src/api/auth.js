// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAQDzYvKlxM3zBlx5E1axksFNoYkvSTm4',
  authDomain: 'practice-design-fe4e1.firebaseapp.com',
  projectId: 'practice-design-fe4e1',
  storageBucket: 'practice-design-fe4e1.appspot.com',
  messagingSenderId: '662976049757',
  appId: '1:662976049757:web:cc2453f9bc869cda9dd3b4',
  measurementId: 'G-KLYKZSE4F1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
