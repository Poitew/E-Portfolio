import React from "react";

function Icon(props){
    return (
        <a 
        href={props.href}
        rel="noopener noreferrer"
        target="_blank"
        >  
            <div className="footer-icon">
                <img src={props.src} alt={props.alt} />
            </div>
        </a>
    );
}

export default Icon;