import React, {  useState }  from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../Context/useAuth';
import "./login.css"






const Login = () => {
 
    const {handleGoogleSignIn, user, handleLogout, handleUserLogin, error}= useFirebase();
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
  

//    getting  email,password
    const hanldeEmail = (e) => {
      setEmail(e.target.value);
    //   console.log(email,password);
    };
    const hanldePassword = (e) => {
      setPassword(e.target.value);
      console.log(password)
    }




//   set  email,password to google handler   


const handleLogin = (e) => {
    e.preventDefault();
    handleUserLogin(email, password);
  };




    return (
       <div className="loginPage">
            <div className="login-form">
            <div className="login-container" >

                <h5>Welcome {user.email}</h5>
                <h3>Login</h3>
             
                {user.email
                ?
                <button className="logIn-btn" onClick={handleLogout} className="btn btn-primary">Log Out</button>
                :
                <button className="logIn-btn" className="login-btn">Log </button>
                }
                
                <form >
                    <input className="p-2 mt-2 input" onChange={hanldeEmail} type="Email" placeholder="Email" />
                    <br />
                    
                    <input className="p-2 mt-2 input" onChange={ hanldePassword } type="Password" placeholder="Password" />
                    <br />

                    <button className="logIn-btn" onClick={handleLogin} className="mt-2 p-2 login-btn">Submit</button>
                    </form>
                <br />
               
               <p>Need an account? <Link to="/registration" >Signup</Link> </p>
              <h4>or</h4>                
                    <h5>Sign in with google</h5>
                    
                    <button className="logIn-btn" onClick={handleGoogleSignIn} className="btn login-btn">Google Sign-in</button>
                    
            </div>
        </div>
       </div>
    );
};

export default Login;