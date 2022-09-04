import { initializeApp } from "firebase/app";
import { getAuth,  FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBGunsbX_sdrhNHcHA5QIXe-EhTeOKo71E",
  authDomain: "socialauth-4c080.firebaseapp.com",
  projectId: "socialauth-4c080",
  storageBucket: "socialauth-4c080.appspot.com",
  messagingSenderId: "198479211569",
  appId: "1:198479211569:web:7961e29163b2075976b910",
  measurementId: "G-V8XBQG6L0F",
  Authorization: "AAAAAAAAAAAAAAAAAAAAAGhbggEAAAAA9Tbv2dZWUicY%2F0Bvp5APqKkkBwk%3DcEO9wcljCcrowke4XTzEHt1Obgq9GJmSSqAZ2BqYSUQeFOOlLM"
};

initializeApp(firebaseConfig);
export const auth = getAuth()
export const facebook = new FacebookAuthProvider()
export const twitter = new TwitterAuthProvider()
