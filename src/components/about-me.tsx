import React from "react"
import skills from "/src/data/skill.json"
import '/src/css/about-me.css'

function AboutMe(){

    const SoftwareDev_skills: any[] = skills.SoftwareDev;
    const DevOps_skills: any[] = skills.DevOps;

    return(
        <div className="about-me-section" id="about-me-ID" >

            <div className="skill-grid">
                <div className="soft-dev-skill">
                    <p>Software Development</p>
                    <div className="row">
                        {SoftwareDev_skills.map((element: any, index: number) => (
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
                        {DevOps_skills.map((element: any, index: number) => (
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
                    As a Software Developer I have strong experience in various languages such as HTML, CSS, JavaScript / TypeScript,
                    React.JS, Vue.Js, PHP, MySQL and outside of web development: C++.
                    While as a DevOps I have experience in using the Linux operating system and Bash/Python for automating tasks, I'm also
                    proficient in using tools such as Docker for deployment and Jenkins for CI/CD.
                    <br/>
                    <br />
                    In my free time I love studying anything tech-related, reading books and listening to music;
                    sometimes I also partecipate in Hackathons, you can find all my projects
                    <a href="https://github.com/Poitew/Hackathons" id="hackathons-link" > here</a>. <br/>
                    Want to get in touch? Contact me through the contact form at the end of the page! 
                </p>
            </div>         
        </div>
    );
}

interface SectionHeaderProps {
    title: string;
}


function SectionHeader(props: SectionHeaderProps){
    return(
        <div className="section-header-container">
            <hr className="section-header-hr" />
            <h3 className="section-header-title">{props.title}</h3>
        </div>
    );
}

export default AboutMe;