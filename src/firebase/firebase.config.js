import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_apiKey,
  // authDomain: process.env.NEXT_PUBLIC_authDomain,
  // projectId: process.env.NEXT_PUBLIC_projectId,
  // storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  // messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  // appId: process.env.NEXT_PUBLIC_appId,
  apiKey: "AIzaSyB2VP0IcJ2BlnIuIAJIypVyH0gxvWj4NnE",
  authDomain: "billify-a52d3.firebaseapp.com",
  projectId: "billify-a52d3",
  storageBucket: "billify-a52d3.firebasestorage.app",
  messagingSenderId: "845844970873",
  appId: "1:845844970873:web:0b672f9b125efdc64703a8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
