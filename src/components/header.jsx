import React from "react"
import '/src/css/header.css'

function HeaderFunc(){
    return(
        <header>
            <div id="link-wrapper">
                <a href="#homeID">
                    <div className="home nav-bar-divs">
                        <p>Home</p>
                    </div>
                </a>
                <a href="#about-me-ID">
                    <div className="about-me nav-bar-divs">
                        <p>About Me</p>
                    </div>
                </a>
                <a href="#projectID">
                    <div className="projects-nav-bar nav-bar-divs">
                        <p>Projects</p>
                    </div>
                </a>
                <a href="#about-me-ID">
                    <p id="my-name-header">sickpoitew</p>
                </a>
            </div>
        </header>
    );
}

export default HeaderFunc;