import React from "react"

function ProjectLeft(props){
    return(
        <div className="grid-project1">
            <img
              src={props.src}
              alt="image one"
              className="project-image-left"
            />
            <p className="project-text-left">
              <b>{props.name}</b> <br />{" "}
              <span>
                {" "}
                {props.desc}{" "}
              </span>
            </p>
            <div className="tech-project-left">
                <p>Tech stack</p>
                <div className="project-icons-left">
                    <img
                      src={props.tech1}
                      alt="css"
                      className="center-icon"
                    />
                    <img
                      src={props.tech2}
                      alt="React"
                      className="center-icon"
                    />
                </div>
            </div>
            <div className="live-demo-left">
                <a href="">
                    <p>Live Test</p>
                    <img src="/assets/icons/arrow-up-right-from-square-solid.svg" alt="arrow down" />
                </a>
            </div>
        </div>
    );
}

export default ProjectLeft;