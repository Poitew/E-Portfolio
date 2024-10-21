import React from "react"
import '/src/css/presentation.css'

function Presentation(){
    return(
        <div className="presentation">
            <h1>
                I'm <span className="h1-span" >SickPoitew</span>, 
                Software Developer and DevOps Engineer.
            </h1> 
            <div className="glow"></div> <br/>
            <ul>
                <li><img src="/assets/tech/react.svg" alt="React.JS Framework" />React.JS</li>
                <li><img src="/assets/tech/php.svg" alt="PHP BackEnd Language" />PHP</li>
                <li><img src="/assets/tech/docker-icon.svg" alt="Docker Technology" />Docker</li>
                <li><img src="/assets/tech/jenkins.svg" alt="Jenkins CI/CD" />Jenkins</li>
                <li><img src="/assets/tech/git-icon.svg" alt="Git Version Control System" />Git</li>
            </ul>
            <p id="presentation-description" >
                I enjoy writing code, create CI/CD pipeline, Docker Images and in general everything about the software development
                lifecycle! <br/>
                <span className="span-block" >
                    In my free time I like to create projects and publish them on my GitHub, I also like to study and read books.
                    If you want to get in touch, use the contact form. Bye!
                </span>
            </p>
            <a href="#about-me-ID">
                <div className="about-me-redirect center-content base-button">
                   <p>Know More!</p>
                </div>
            </a>
            <a href="#projects-ID">
                <div className="resume center-content base-button">
                    <p>Projects</p>
                </div>
            </a>
        </div>
    );
}

export default Presentation