import React from "react"
import '/src/css/header.css'

function HeaderFunc(){
    return(
        <header>
            <a href="#about-me-ID">
                <div className="logo-header">
                    <img src="/assets/icons/logo.png" alt="Code Logo" id="js-logo-img" />
                    <p>SICKPOITEW</p>
                </div>
            </a>
            <a href="#homeID">
                <div className="home nav-bar-divs">
                    <p>HOME</p>
                </div>
            </a>
            <a href="#about-me-ID">
                <div className="about-me nav-bar-divs">
                    <p>ABOUT ME</p>
                </div>
            </a>
            <a href="#projectID">
                <div className="projects-nav-bar nav-bar-divs">
                    <p>PROJECTS</p>
                </div>
            </a>
        </header>
    );
}

export default HeaderFunc;