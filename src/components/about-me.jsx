import React from "react"
import Skill from "./skill";
import '/src/css/about-me.css'


function AboutMe(){
    return(
        <>
            <div id="about-me-ID"></div>
            <div className="about-me-section">
            <div className="tech-stack">
                <p>Tech Stack</p>
                    <div className="tech-stack-grid">
                        <Skill src="/assets/tech/html-5.svg" alt="html5" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/css-3.svg" alt="css3" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/javascript.svg" alt="javascript" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/react.svg" alt="react" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/vitejs.svg" alt="vitejs" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/c-plusplus.svg" alt="c++" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/blender.svg" alt="blender" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/unrealengine-icon.svg" alt="unreal engine 5" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/bash-icon.svg" alt="bash script" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/github.svg" alt="github" className="tech-icon" ></Skill>
                        <Skill src="/assets/tech/visual-studio-code.svg" alt="vscode" className="tech-icon" ></Skill>
                    </div>
            </div>
            <hr className="background-hr" />
            <h5 className="background-section-title">Background</h5>
            <hr className="background-hr" />
            <p className="about-me-story">
              Hi! My name is "sickpoitew", I am 17 years old self-taught software
              developer and game developer settled in Italy with 4 years of experience in software development
              and 1 year of experience in creating games in Unreal Engine 5<br />
              <br />
              In my free time, apart from programming, I love reading books and novels, I also like listening to
              music while playing games.
              <br />
              <br />
              If you have an idea about a game or a software/website just contact me!
            </p>
        </div>
        </>
        
    );
}

export default AboutMe;