import React from 'react';
import "./Footer.css"
import logo from '../../../Images/1.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
          <div >
            <div className="footer-container">
                <div className="row">
                  <div className="col-lg-6">
                  <div className="container "> <img className="footer-img img-fluid" src={logo} alt="" /></div>
                  </div>
                <div className="col-lg-6">
                   <div className="container"> <h4>Quick Link</h4>
                    <ul>
                      <li><NavLink to="/" className="Link"><b>Home</b></NavLink></li>
                      <li><NavLink to="/services" className="Link"><b>Services</b></NavLink></li>
                      <li><NavLink to="/about" className="Link"><b>About Us</b></NavLink></li>
                      <li ><NavLink to="/contact" className="Link"><b>Contuct Us</b></NavLink></li>

                    </ul></div>
                </div>
        
              </div>
          </div>
        </div>
    );
};

export default Footer;