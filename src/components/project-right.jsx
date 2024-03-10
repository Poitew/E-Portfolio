import React from "react"

function ProjectRight(props){
    return(
      <div className="grid-project2">
        <p className="project-text-right">
          <b>{props.name}</b> <br />{" "}
            <span>{props.desc}</span>
        </p>
        <div className="tech-project-right">
          <p>Tech stack</p>
          <div className="project-icons-right">
            <img
              src={props.tech1}
              alt="css"
              className="center-icon"
            />
            <img
              src={props.tech2}
              alt="react"
              className="center-icon"
            />
          </div>
        </div>
        <div className="live-demo-right">
          <a href="">
            <p>Live Test</p>
              <img src="/assets/icons/arrow-up-right-from-square-solid.svg"  alt="arrow down" />
          </a>
        </div>
        <img
          src={props.src}
          alt="image 2"
          className="project-image-right"
        />
      </div>
    );
}

export default ProjectRight;