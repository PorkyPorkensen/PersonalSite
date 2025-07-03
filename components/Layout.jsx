import React, { useContext } from "react";
import LightModeContext from "../LightModeContext";
import { Outlet, Link } from "react-router-dom";
import darkLogo from "../images/logoBlack2.png"
import lightLogo from "../images/logoWhite2.png"


export default function Layout() {
  const { lightMode, setLightmode } = useContext(LightModeContext);

  return (
    <div className={`main ${lightMode ? "light" : "norm"}`}>
      <div className="logo">
      <header>
        <div className="headInfo">
            <img  alt="MV Logo" className="logoImg" src={ lightMode ? `${darkLogo}` : `${lightLogo}`} />
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