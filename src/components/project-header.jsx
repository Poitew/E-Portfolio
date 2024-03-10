import React from "react"
import '/src/css/project-header.css'

function ProjectHeader(){
    return(
        <>
            <div id="projectID"></div>
            <div className="projects-header">
                <hr className="project-hr" />
                <h5 className="projects-section-title">Projects</h5>
                <hr className="project-hr" />
                <p>all projects are open source on GitHub!</p>
            </div>
        </>
    );
}

export default ProjectHeader;