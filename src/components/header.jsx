import React from "react"
import '/src/css/header.css'

function HeaderFunc(){
    return(
        <header>
            <div id="link-wrapper">
                <a href="#about-me-ID">
                    <div className="my-name-header">
                        <img src="/assets/icons/logo.svg" alt="" />
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
                
            </div>
        </header>
    );
}

export default HeaderFunc;