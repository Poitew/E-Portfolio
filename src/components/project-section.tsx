import React from "react"
import projects from "/src/data/projects.json"
import '/src/css/project-section.css'

function ProjectSection(){

    const projects_info: any[] = projects;

    return(
        <div id="projects-section" >
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
            <div className="project-info">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                <ul>
                    {props.tech.map((techItem, index) => (
                        <li key={index}>{techItem}</li>
                    ))}
                </ul>
            </div>
            <a href={props.github} id="github-project" >
                <img src="/assets/tech/github.svg" alt="github repo" />
            </a>
        </div>
    );
}

export default ProjectSection;