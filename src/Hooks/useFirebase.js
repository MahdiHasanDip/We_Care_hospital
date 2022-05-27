import React, { useState,useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.inti";


initializeAuthentication();






const useFirebase = () => {
  const [user, setUser] = useState({});
  
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

 
    const [error, setError] = useState("")


// Sign-In with google  
    const handleGoogleSignIn=() =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
          const user = result.user;
          setUser(user);
          setError("");
           })
           .catch((error) => setError(error.message));

    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              const uid = user.uid;
              
            }
          });
    })





// email login

const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }


// signout 
const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };


// registration with email 

const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
   
  };



    return {
        handleGoogleSignIn,
        user,
        handleLogout,
        handleUserLogin,
        handleUserRegister,
        error

    };
};

export default useFirebase;