import React from "react"
import SectionHeader from "./section-header"
import projects from "/src/data/projects.json"
import '/src/css/project-section.css'
import '/src/css/section-header.css'

function ProjectSection(){

    const projects_info = projects;

    return(
        <div className="projects-section" id="projects-ID" >

            <SectionHeader
                title="Built projects"
            >
            </SectionHeader>

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
            <div className="tech-project">
                <p>{props.tech1}</p>
                <p>{props.tech2}</p>
                <p>{props.tech3}</p>
                <p>{props.tech4}</p>
                <p>{props.tech5}</p>
            </div>
            <div className="test">
                <a href={props.github}>
                    <img src="/assets/tech/github.svg" alt="github repo" />
                </a>
            </div>
        </div>
    );
}

export default ProjectSection;