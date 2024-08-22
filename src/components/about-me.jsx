import React from "react"
import skills from "/src/data/skill.json"
import '/src/css/about-me.css'

function AboutMe(){

    const SoftwareDev_skills = skills.SoftwareDev;
    const DevOps_skills = skills.DevOps;

    return(
        <div className="about-me-section" id="about-me-ID" >

            <div className="skill-grid">
                <div className="soft-dev-skill">
                    <p>Software Development</p>
                    <div className="row">
                        {SoftwareDev_skills.map((element, index) => (
                            <img
                                key={index}
                                src={element.src}
                                alt={element.alt}
                            ></img>
                        ))}
                    </div>
                </div>
                
                <div className="DevOps-skill">
                    <p>DevOps Engineering</p>
                    <div className="row">
                        {DevOps_skills.map((element, index) => (
                            <img
                                key={index}
                                src={element.src}
                                alt={element.alt}
                            ></img>
                        ))}
                    </div>
                </div>
            </div>

            <div className="history-container">
                <SectionHeader
                    title="About Me & Projects"
                >
                </SectionHeader>
                <p className="history">
                    Hi! My name is "sickpoitew". I'm a 17-year-old student and IT enthusiast settled in Italy with 4 years of 
                    experience in programming. I'm also a Software Developer and DevOps Engineer costantly studying to enchance my
                    knowledge.
                    <br />
                    <br />
                    As a Software Developer I have strong experience in various languages such as HTML, CSS, JavaScript,
                    React.JS / React Native, Vue.Js, PHP, MySQL and outside of web development: C++.
                    While as a DevOps I have experience in using the Linux operating system and Bash/Python for automating tasks, I'm also
                    proficient in using tools such as Docker for deployment and Jenkins for CI/CD.
                    <br/>
                    <br />
                    In my free time, I love discovering new technologies, reading books and listening to music. <br/>
                    Want to hire me? Contact me!
                </p>
            </div>         
        </div>
    );
}

function SectionHeader(props){
    return(
        <div className="section-header-container">
            <hr className="section-header-hr" />
            <h3 className="section-header-title">{props.title}</h3>
        </div>
    );
}

export default AboutMe;