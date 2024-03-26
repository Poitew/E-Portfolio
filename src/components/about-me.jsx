import React from "react"
import '/src/css/about-me.css'

function AboutMe(){
    return(
        <>
            <div id="about-me-ID"></div>
            <div className="about-me-section">
            <div className="tech-stack">
                <p>Tech Stack</p>
                    <div className="tech-stack-grid">
                        <div className="grid-item1">
                            <img src="/assets/tech/html-5.svg" alt="html5" title="html" />
                        </div>
                        <div className="grid-item2">
                            <img src="/assets/tech/css-3.svg" alt="css3" />
                        </div>
                        <div className="grid-item3">
                            <img src="/assets/tech/javascript.svg" alt="js" />
                        </div>
                        <div className="grid-item4">
                            <img src="/assets/tech/react.svg" alt="React.js" />
                        </div>
                        <div className="grid-item5">
                            <img src="/assets/tech/vitejs.svg" alt="viteJS" />
                        </div>
                        <div className="grid-item6">
                            <img src="/assets/tech/c-plusplus.svg" alt="cpp20" />
                        </div>
                        <div className="grid-item7">
                            <img src="/assets/tech/blender.svg" alt="blender" />
                        </div>
                        <div className="grid-item8">
                            <img src="/assets/tech/unrealengine-icon.svg" alt="ue5" />
                        </div>
                        <div className="grid-item9">
                            <img src="/assets/tech/bash-icon.svg" alt="Bash" />
                        </div>
                        <div className="grid-item10">
                            <img src="/assets/tech/github.svg" alt="github" />
                        </div>
                        <div className="grid-item11">
                            <img src="/assets/tech/visual-studio-code.svg" alt="VS code" />
                        </div>
                        
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