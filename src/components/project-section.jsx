import React from "react"
import '/src/css/project-section.css'
import ProjectLeft from "./project-left";
import ProjectRight from "./project-right";

function ProjectSection(){
    return(
        <div className="projects-section">
            <ProjectLeft 
                src="/assets/projects-img/book-shop.png"
                name="Book Shop" 
                desc="Book shop e-commerce project that uses React.JS and react Hooks"
                tech1="/assets/tech/css-3.svg"
                tech2="/assets/tech/react.svg"
            >
            </ProjectLeft>
            <ProjectRight 
                src="/assets/projects-img/portfolio.png"
                name="E-Portfolio" 
                desc="E-Portfolio website about me that showcase my skills and projects"
                tech1="/assets/tech/css-3.svg"
                tech2="/assets/tech/react.svg"
            >
            </ProjectRight>
        </div>
    );
}

export default ProjectSection;