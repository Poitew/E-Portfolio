import React from "react"
import '/src/css/presentation.css'

function Presentation(){
    return(
        <div className="presentation">
            <h1>
                {" "}
                    Hi, I'm <span>sickpoitew</span>: A Front-End <br />
                <span className="inline-end">React Developer</span>
            </h1> <br/>
            <h3>
                I love creating frontend web pages and softwares using React.js and
                Electron.js
            </h3>
            <div className="about-me-redirect">
                {" "}
                <a href="#about-me-ID">
                   <h4>Scroll down to know more!</h4>
                   <img src="/assets/icons/reply-solid.svg" alt="arrow down" />
                </a>
            </div>
        </div>

    );
}

export default Presentation