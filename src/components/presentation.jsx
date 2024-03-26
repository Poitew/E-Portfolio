import React from "react"
import '/src/css/presentation.css'

function Presentation(){
    return(
        <div className="presentation">
            <h1>
                {" "}
                    Hi, I'm <span>sickpoitew</span>: <span>Software</span> and <br />
                    <span className="inline-end"><span>Game</span> Developer</span>
            </h1> <br/>
            <h3>
                Software Developer and Game Developer that loves transforming ideas into reality
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