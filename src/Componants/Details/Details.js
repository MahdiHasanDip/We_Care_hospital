import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./Details.css"

const Details = () => {
const {id} = useParams();

const [allServices , setAllServices] = useState([])
const [singleService , setSignleService] = useState({})

useEffect(() => {
    fetch("/servicedata.json")
    .then(res => res.json())
    .then(data => setAllServices(data))
    
}, [])

useEffect(()=>{
    const matchedService= allServices.find(service=>service.id==id)
    setSignleService(matchedService)
    console.log(matchedService)
},[allServices])



    
     



    return (
        <div>
            <div className="container">
                <img className="detail-img" src={singleService?.img} alt="" />
            </div>
            <div className="text-center mt-5 signle-des">
                <h1>{singleService?.name}</h1>
                <h4 className="text-center mt-5"> {singleService?.des}</h4>
                <Link to ='/home'>
                <button className="logout-btn mt-5">Back to home</button></Link>
            </div>
        </div>
    );
};

export default Details;