import React, { useState } from "react";
import '/src/css/footer.css';

function Footer() {
    return (
        <footer>
            <h3>Contact Me</h3>
            <form action="https://formspree.io/f/xleqvddg"method="POST">
                <label htmlFor="username-input">
                    Name <br/>
                    <input type="text" name="username" placeholder="Username or First name" id="username-input" className="base-input"/>
                </label>
                <br/>
                <label htmlFor="email-input">
                    Email <br/>
                    <input type="text" name="email" placeholder="Your Email Addres" id="email-input" className="base-input"/>
                </label>
                <br/>
                <label htmlFor="message-input">
                    Message <br/>
                    <textarea name="message" placeholder="Your Message" id="message-input" className="base-input"/>
                </label>
                <br/>
                <input type="submit" value="Send Message" id="submit-input" className="base-input" />
            </form>
            <div className="footer-sitemap">
                <ul>
                    <li><a href="#homeID">Home</a></li>
                    <li><a href="#about-me-ID">About Me</a></li>
                    <li><a href="#projects-ID">Projects</a></li>
                </ul>

                <div className="footer-icons">
                    <Icon
                        href="https://www.github.com/Poitew"
                        src="/assets/tech/github.svg"
                        alt="Github"
                    ></Icon>

                    <Icon
                        href="https://twitter.com/sickpoitew"
                        src="/assets/icons/x-twitter.svg"
                        alt="Twitter"
                    ></Icon>
                </div>

                <p className="footer-thanks" >Made with love by sickpoitew</p>
            </div>
        </footer>
    );
}

interface IconProp {
    href: string;
    src: string;
    alt: string;
}

function Icon(props: IconProp){
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

export default Footer;