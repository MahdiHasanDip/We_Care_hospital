import React from 'react';
import "./About.css"
import img from "../../Images/Untitl.png"


const About = () => {
    return (
        <div>
            

            <div >
                <img className="img-fluid" src="https://i.ibb.co/NtZfYq5/33.png"alt="" />
            </div>
            <div className="container p-5 mb-5 text">
            <h1>About Us</h1>
                <p>
                Highest quality through specialisation
                For over three decades, we have specialised in specific areas of medicine - mental health, orthopaedics, neurology, surgery and general medicine. This approach has given us an in-depth understanding of specific disorders and their treatments, enabling us to focus on providing the best treatment options and care for our patients. Each year, our 10,500 employees treat and care for around 320,000 patients at currently 26 locations in Germany and the United Kingdom.
                <br />
                Our aim is to give every patient the prospect of a better quality of life. To do so, our reinvestment model ensures we maintain a high standard of quality and are able to be innovative and forward thinking with our infrastructure, clinical delivery and staff development. Additionally, our collaboration with experienced specialists, expert healthcare professionals, clinical partners and patient groups ensures we provide the best-possible experience and care for patients and their families when visiting our hospitals.
                </p>
             </div>

        </div>
    );
};

export default About;