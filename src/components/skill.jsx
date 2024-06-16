import React from "react"

function Skill(props){
    return(
        <div className="skill" >
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default Skill;