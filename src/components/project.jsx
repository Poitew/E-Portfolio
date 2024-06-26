import React from "react"

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

export default Project;