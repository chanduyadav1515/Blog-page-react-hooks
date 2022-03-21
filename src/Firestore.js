import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmc8Jqey-qbR2FtZZwr1L_sXNscDMHcAg",
  authDomain: "building-blog-page.firebaseapp.com",
  projectId: "building-blog-page",
  storageBucket: "building-blog-page.appspot.com",
  messagingSenderId: "260432616630",
  appId: "1:260432616630:web:7562b480012d777bd9da17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
