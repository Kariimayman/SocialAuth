import './App.css';
import React, { useState } from 'react'
import {auth,  facebook, twitter} from './Config/firebaseconfig'
import {signInWithPopup, signOut} from 'firebase/auth' 
import { getAuth } from "firebase/auth";

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  
  const LoginFalse = () => (
    <>
      <h1>awaiting login...</h1>
      <button style={{width:150, backgroundColor:'#3b5998', color:'white'}}
      onClick={() => login(facebook)}>
        Login with Facebook
      </button>
      <button style={{width:150, backgroundColor:'#00acee', color:'white'}}
      onClick={() => login(twitter)}>
        Login with Twitter
      </button>
   </>
  )
  
  const LoginTrue = () => (
    <>
      <h1>Welcome!</h1>
      <img src={user.photoURL} style={{width:120}}/>
      <p>Welcome!Your account Name : {user.displayName}! </p>
      <button style={{width:150}} onClick={logout}>
        Logout
      </button>
    </>
  )

  const login = async(provider) => {
    const result = await signInWithPopup(auth, provider) 
    setUser(result.user)
    setIsLogin(true)
    console.log(result)
    .catch(function(error) {
      var errorCode = error.code;
      console.log(errorCode);
      alert(errorCode);
    
      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
  }

  const logout = async() => {
    const result = await signOut(auth)
    setUser(null)
    setIsLogin(false)
    console.log(result)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
      {isLogin && user ? <LoginTrue/> : <LoginFalse/>}

      </header>
    </div>
  );
}

export default App;