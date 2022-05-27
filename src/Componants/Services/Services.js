import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./services.css"

const Services = () => {
    const [services , setServices] = useState([])

    // services data load 
    useEffect(() => {
        fetch("./servicedata.json")
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])
    
    return (
        <div className="mb-5">
            <img className='img-fluid' src="https://i.ibb.co/wrYsnbH/22.png" alt="" />
         <div className="mt-5 mb-5">
            <h1 className="text-center"> Our Services</h1>
            <hr />
         </div>


         <div className="container">
             <div className="row">
                 {
                     services.map(service => (
                        <div className="col-lg-4">
                        <div className="card m-3 pt-3">
                            <div className="img-container img-fluid mx-auto ms-3 ">
                                <img src={service.img} alt="" />                                     
                            </div>
                           <div className="des p-3">
                             
                                 <h3>{service.name}</h3>
                               
                               <Link to={`/details/${service.id}`}>
                               <button className="logout-btn"  >Service Detail</button>
                               </Link>
                           </div>
                       </div>
                    </div>
                     ))
                 }
             </div>
         </div>
        </div>
    );
};

export default Services;