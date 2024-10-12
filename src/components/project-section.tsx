import React from "react"
import projects from "/src/data/projects.json"
import '/src/css/project-section.css'

function ProjectSection(){

    const projects_info: any[] = projects;

    return(
        <div className="projects-section" id="projects-ID" >
            {projects_info.map((element, index) => (
                <Project
                    key={index}
                    name={element.name}
                    desc={element.description}
                    src={element.src}
                    tech={element.tech}
                    github={element.github}
                />
            ))}
        </div>
    );
}

interface ProjectsProp {
    src: string;
    name: string;
    desc: string;
    tech: string[];
    github: string;
}

function Project(props: ProjectsProp){
    return(
        <div className="project" style={{ backgroundImage: `url(${props.src})`}}>
            <p className="project-text">
                <b>{props.name}</b> <br/> <br/>
                <span>
                {props.desc}
                </span>
            </p>
            <ul className="tech-project">
                {props.tech.map((techItem, index) => (
                    <li key={index}>{techItem}</li>
                ))}
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