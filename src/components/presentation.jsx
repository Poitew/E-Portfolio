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
                <li><img src="/assets/tech/react.svg" alt="React.JS" /> React.JS</li>
                <li><img src="/assets/tech/vue.svg" alt="Vue.JS" /> Vue.JS</li>
                <li><img src="/assets/tech/php.svg" alt="PHP" /> PHP</li>
                <li><img src="/assets/tech/mysql-icon.svg" alt="MySQL" /> MySQL</li>
                <li><img src="/assets/tech/bash-icon.svg" alt="Bash" /> Bash</li>
            </ul>
            <p id="presentation-description" >
            I write clean code and automation scripts for optimizing the software development lifecycle; from planning, to
            testing and finally to monitoring, to ensure fast and high quality applications. <br/>
                <span className="span-block" >
                    I enjoy learning new technologies and solidify the one I already know to further expand my skills,
                    I also enjoy reading as it develop my knowledge and creativity.
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