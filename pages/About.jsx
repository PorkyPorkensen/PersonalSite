import React from "react";
import headShot from "../images/selfie2.png"
import stell from "../images/stella.jpg"
import jem from "../images/jem.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About(){
    
    const  [stella, setStella] = React.useState(false)
    
    

    
    return (
        <>


        <main className="abt" data-aos="zoom-in-up">
            <img className="selfie" src={headShot} />
            <p>My name is Mitchell Vieira, and I was born and raised just outside of the GTA (Greater Toronto Area), in a city of approximately 150,000 residents. I attended Carleton University from 2017 to 2019, 
                where I pursued a degree in Commerce before having to step away due to medical reasons. Since then, I have gained 
                experience in the retail sector and spent three years with Just Junk, a local waste management company. In this 
                role, I worked directly with customers, delivering prompt and courteous service.</p>

                <p>For almost 3 years, I have immersed myself in web development through self-guided learning and structured 
                    online courses. I’ve completed 100s of hours of coursework, over 1500 lessons, and a multitude of solo projects as 
                    part of Scrimba's "Frontend Career Path". Alongside that, I have also followed along with a multitude of YouTube crash courses revolving around the MERN stack.
                    I am proficient in JavaScript, React, NodeJS, Express, CSS, HTML, Git and am currently delving into the worlds of TypeScript and Python.</p>

                <p>In addition to coding, I am passionate about my dogs, gaming, MMA, basketball, and football.</p>


                <button className="dogBtn" onClick={() => setStella(!stella)}>{stella? "Hide their beautiful faces" : "CLICK HERE FOR A SUPRISE"} </button>
                {stella ? 
                    <div  className="stell">
                    <h3 className="doggos">Meet my Goldendoodles! Stella and Jem</h3>
                        <div className="dogPics">
                            <img src={stell} /> 
                            <img src={jem} /> 
                        </div>
                    </div>
                    : ""}



        </main>
        </>
    )
}