import React, { useContext } from "react";
import LightModeContext from "../LightModeContext";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const { lightMode, setLightmode } = useContext(LightModeContext);

  return (
    <div className={`main ${lightMode ? "light" : "norm"}`}>
            <div className="boxes">
              <div className="box box-red"></div>
              <div className="box box-blue"></div>
              <div className="box box-green"></div>
              <div className="box box-orange"></div>
              <div className="box box-red2"></div>
              <div className="box box-blue2"></div>
              <div className="box box-green2"></div>
              <div className="box box-orange2"></div>
            </div>
      <div className="logo">
      <header>
        <div className="headInfo">
            <img  alt="MV Logo" className="logoImg" src={ lightMode ? "../images/logoBlack2.png" : "../images/logoWhite2.png"} /> 
            <nav>
            <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/projects">My Projects</Link>
            </nav>
            <button 
              className="modeBtn" 
              onClick={() => {setLightmode(!lightMode)}}
              aria-pressed={lightMode}
              aria-label="Toggle light/dark mode"
              >{!lightMode ? <i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>}
            </button>
        </div> 
       
      </header>
        </div>
      <Outlet />

    </div>
  );
}