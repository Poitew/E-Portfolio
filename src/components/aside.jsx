import React from "react"
import '/src/css/aside.css'

function AsideFunc(){
    return(
        <aside id="homeID">
            <div className="linkedin center-icon2">
                <a href="">
                    <img src="/assets/icons/linkedin.svg" alt="linkedin" />
                </a>
            </div>

            <div className="twitter center-icon2">
                <a href="">
                    <img src="/assets/icons/x-twitter.svg" alt="twitter" />
                </a>
            </div>
            <div className="email center-icon2">
                <a href="mailto:">
                    <img src="/assets/icons/envelope-solid.svg" alt="email" />
                </a>
            </div>

            <div className="github center-icon2">
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