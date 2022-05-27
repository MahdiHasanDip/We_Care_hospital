import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
// usestate 
const [services , setServices] = useState([])

// api load 
useEffect(() => {
    fetch("./servicedata.json")
    .then(res => res.json())
    .then(data => setServices(data))   
}, [])

    return (
        <div className="home">
           <div className="banner ">
             <img className='img-fluid' src="https://i.ibb.co/HpQbR7M/11.png" alt="" />
            
           </div>

         <div className="mt-5">
            <h1 className="text-center"> Our Services</h1>
            <hr />
         </div>


         <div className="container ">
             <div className="row ">
                 {
                     services.map(service => (
                         <div className="col-lg-4">
                             <div className="card m-3 pt-3 ">
                                 <div className="img-container img-fluid  ms-3 ">
                                     <img src={service.img} alt="" />                                     
                                 </div>
                                <div className="des p-3">
                                    <h3>Service Name</h3>
                                      <h1>{service.name}</h1>
                                    
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
<br />
<br />
<br />
<br />    

</div>
    );
};

export default Home;



