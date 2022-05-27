import React from 'react';
import './Header.css'
import img from "../../../Images/1.png"
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const {user,handleLogout}= useFirebase();
    return (

 // navbar 
             <div>
                 <div className="d">
                     <div className="container">
                        <div className="row">
                             <div className="col">
                                <img className="logo" src={img} alt="" />
                             </div>
                             <div className="col-lg-8 Nav-link mt-4 ">
                                 <ul>
                                    <li><NavLink to="/" className="Link">Home</NavLink></li>
                                    <li><NavLink to="/services" className="Link">Services</NavLink></li>
                                    <li><NavLink to="/about" className="Link">About Us</NavLink></li>
                                    <li ><NavLink to="/contact" className="Link">Contuct Us</NavLink></li>
{/* log out condition         */}
                                   {
                               user.email
                               ?                               
                                
                                <button className="logout-btn ms-3" onClick={handleLogout}>Log Out</button>
                               :
                               <li><NavLink to="/registration" className="Link "><button className="logout-btn">Login</button></NavLink></li>
                                         }                         
                                                            
                                </ul>
                             </div>
                                    
                            </div>
                         </div>
                    </div>

                </div>
             );
};

export default Header;
