import React from "react";
import AOS from 'aos'

export default function Contact(){
    return (
        <div className="con" data-aos="zoom-in-up">
        <div className="conDiv">
            <div className="conInf"><i className="fa-solid fa-envelope"></i><p>MitchVWebsolutions@gmail.com</p></div>
            <div className="conInf"><i className="fa-brands fa-linkedin"></i><p><a href="https://www.linkedin.com/in/mitchell-vieira-894442151/">My LinkedIn profile</a></p></div>
            <div className="conInf"><i className="fa-brands fa-github"></i><p><a href="https://github.com/PorkyPorkensen">My GitHub profile</a></p></div>

        </div>
        </div>
    
    )
}