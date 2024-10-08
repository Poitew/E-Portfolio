import React from "react"
import '/src/css/aside.css'

function AsideFunc(){
    return(
        <aside id="homeID">
            <div className="center-icon2">
                <a 
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                    <img src="/assets/icons/linkedin.svg" alt="linkedin" />
                </a>
            </div>

            <div className="twitter center-icon2">
                <a 
                  href="https://twitter.com/sickpoitew" 
                  rel="noopener noreferrer"
                  target="_blank"
                >
                    <img src="/assets/icons/x-twitter.svg" alt="twitter" />
                </a>
            </div>

            <div className="center-icon2">
                <a
                  href="https://github.com/Poitew"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                    <img src="/assets/tech/github.svg" alt="github" />
                </a>
            </div>
        </aside>
    );
}

export default AsideFunc;