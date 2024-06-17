import React from "react"
import '/src/css/presentation.css'

function Presentation(){
    return(
        <div className="presentation">
            <h1>
                I'm <span className="h1-span" >SickPoitew</span>, 
                {(window.innerWidth < 992) ? <br/> : " "} 
                an {(window.innerWidth > 992) ? <br/> : " "} Aspiring DevOps Engineer.
            </h1> 
            <div className="glow"></div> <br/>
            <ul>
                <li><img src="/assets/tech/react.svg" alt="React.JS" /> React.JS</li>
                <li><img src="/assets/tech/vue.svg" alt="Vue.JS" /> Vue.JS</li>
                <li><img src="/assets/tech/php.svg" alt="PHP" /> PHP</li>
                <li><img src="/assets/tech/bash-icon.svg" alt="Bash" /> Bash</li>
            </ul>
            <p id="presentation-description" >
                I love developing modern software that delivers a stunning user experience through a clean and responsive
                GUI while also ensuring high performance. <br/>
                <span className="span-block" >
                    I enjoy learning new languages and frameworks to create innovative software, I also enjoy reading as it
                    expand my knowledge and creativity.
                </span>
            </p>
            <a href="#about-me-ID">
                <div className="about-me-redirect center-content base-button">
                   <p>Know More!</p>
                </div>
            </a>
            <a href="" download={true} >
                <div className="resume center-content base-button">
                    <p>Resume</p>
                </div>
            </a>
        </div>
    );
}

export default Presentation