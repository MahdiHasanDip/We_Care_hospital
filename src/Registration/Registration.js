import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './registration.css'

const Registration = () => {

  // importing function 

    const {handleUserRegister,user,handleGoogleSignIn}= useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  // getting email value 
    const hanldeEmail = (e) => {
      setEmail(e.target.value);
    };
// getting ps value 
    const hanldePassword = (e) => {
      setPassword(e.target.value);
    }; 
    
  
    const handleRegister = (e) => {
      e.preventDefault();
      
      handleUserRegister(email, password);
      
    };



    return (
            <div className="regPage">
              <div className="reg-form">
              <div  className="reg-container">

            
              <h1>Registration</h1>
              <hr />
              <form>
                  <input className="p-2 mt-2 w-50 input"  onChange={hanldeEmail} type="Email" placeholder="Email" />
                  <br />
                  
                  <input className="p-2 mt-2 w-50 input"  onChange={ hanldePassword } type="Password" placeholder="Password" />
                  <br />
                  
                  <button onClick={handleRegister} className="mt-2 p-2 login-btn">Submit</button>
              </form>
              <br />
              <hr />
              <p> Alredy have an account? <Link to="/login" >Login</Link> </p>
              <h3>or</h3> 
              <br />
                  <h5>sign in with google</h5>
                  <br />
                  
                  <button onClick={handleGoogleSignIn} className="login-btn">Google Sign-in</button>
              </div>
                      </div>
            </div>
    );
  };

export default Registration;