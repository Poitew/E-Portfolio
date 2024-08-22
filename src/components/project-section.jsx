import React from "react"
import projects from "/src/data/projects.json"
import '/src/css/project-section.css'

function ProjectSection(){

    const projects_info = projects;

    return(
        <div className="projects-section" id="projects-ID" >
            <div className="projects-container">
                {projects_info.map((element, index) => (
                    <Project
                        key={index}
                        name={element.name}
                        desc={element.description}
                        src={element.src}
                        tech1={element.tech1}
                        tech2={element.tech2}
                        tech3={element.tech3}
                        tech4={element.tech4}
                        tech5={element.tech5}
                        tech6={element.tech6}
                        github={element.github}
                    />
                ))}
            </div>
        </div>
    );
}

function Project(props){
    return(
        <div className="project" style={{ backgroundImage: `url(${props.src})`}}>
            <p className="project-text">
                <b>{props.name}</b> <br/> <br/>
                <span>
                {props.desc}
                </span>
            </p>
            <ul className="tech-project">
                <li>{props.tech1}</li>
                <li>{props.tech2}</li>
                <li>{props.tech3}</li>
                <li>{props.tech4}</li>
                <li>{props.tech5}</li>
                <li>{props.tech6}</li>
            </ul>
            <div className="test">
                <a href={props.github}>
                    <img src="/assets/tech/github.svg" alt="github repo" />
                </a>
            </div>
        </div>
    );
}

export default ProjectSection;