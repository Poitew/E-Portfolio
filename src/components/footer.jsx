import React from "react"
import '/src/css/footer.css'

function FooterFunc(){
    return(
        <footer>
            <hr />
            <p>
                <span>Got a project in your mind?</span>
                <br />
                Make it come true with a few clicks, contact me:
            </p>{" "}
            <br />
            <div className="footer-contact">
                <a
                    href="https://github.com/Poitew"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img src="/assets/tech/github.svg" alt="github" />
                </a>

                <a href="" rel="noopener noreferrer" target="_blank">
                    <img src="/assets/icons/linkedin.svg" alt="linkedin" id="footer-linkedin" />
                </a>

                <a href="mailto:">
                    <img src="/assets/icons/envelope-solid.svg" alt="email"  id="footer-mail" />
                </a>

                <a href="">
                    <img src="/assets/icons/x-twitter.svg" alt="twitter"  id="footer-twitter" />
                </a>
            </div>
                <a href="#homeID">
                    <img src="/assets/icons/turn-up-solid.svg" alt="arrow up" id="arrow-up" />
                </a>
                <br />
            <p className="footer-p">Made with love by sickpoitew</p>
        </footer>
    );
}

export default FooterFunc;