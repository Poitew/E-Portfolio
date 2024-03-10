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
                            <img src="/src/assets/tech/html-5.svg" alt="html5" title="html" />
                        </div>
                        <div className="grid-item2">
                            <img src="/src/assets/tech/css-3.svg" alt="css3" />
                        </div>
                        <div className="grid-item3">
                            <img src="/src/assets/tech/javascript.svg" alt="js" />
                        </div>
                        <div className="grid-item4">
                            <img src="/src/assets/tech/react.svg" alt="React.js" />
                        </div>
                        <div className="grid-item5">
                            <img src="/src/assets/tech/vitejs.svg" alt="viteJS" />
                        </div>
                        <div className="grid-item6">
                            <img src="/src/assets/tech/c-plusplus.svg" alt="cpp20" />
                        </div>
                        <div className="grid-item7">
                            <img src="/src/assets/tech/bash-icon.svg" alt="Bash" />
                        </div>
                        <div className="grid-item8">
                            <img src="/src/assets/tech/github.svg" alt="github" />
                        </div>
                        <div className="grid-item9">
                            <img src="/src/assets/tech/visual-studio-code.svg" alt="VS code" />
                        </div>
                        <div className="grid-item10">
                            <img src="/src/assets/tech/blender.svg" alt="blender" />
                        </div>
                    </div>
            </div>
            <hr className="background-hr" />
            <h5 className="background-section-title">Background</h5>
            <hr className="background-hr" />
            <p className="about-me-story">
              Hi! My name is "sickpoitew", I am 17 years old self-taught Front-End web
              developer settled in Italy with 4 years of experience in coding /
              programming and 1 year in creating web pages using React.js and it's popular
              tool: Vite. <br />
              <br />
              I started my journey by creating web pages when I was 13 years old and in 4
              years I developed skills in other fields that I still like to use to this
              day. I'm always in search for new opportunities to learn more and more
              without, obviously, forgetting past skills! that's what I like to do!
              <br />
              <br />
              In my free time I love reading books and novels, I also like listening to
              music and sometimes I play games.
            </p>
        </div>
        </>
        
    );
}

export default AboutMe;