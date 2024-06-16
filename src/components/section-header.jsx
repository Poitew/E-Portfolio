import React from "react";
import '/src/css/section-header.css'

function SectionHeader(props){
    return(
        <div className="section-header-container">
            <hr className="section-header-hr" />
            <h3 className="section-header-title">{props.title}</h3>
        </div>
    );
}

export default SectionHeader;