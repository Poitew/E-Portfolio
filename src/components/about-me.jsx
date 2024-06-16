import React from "react"
import Skill from "./skill";
import SectionHeader from "./section-header"
import '/src/css/about-me.css'
import '/src/css/section-header.css'

function AboutMe(){
    return(
        <>
            <div className="about-me-section" id="about-me-ID" >
                <div className="tech-stack">
                    <p>Tech Stack</p>
                        <div className="tech-stack-grid">
                            <Skill src="/assets/tech/html-5-svgrepo-com.svg" alt="html5"></Skill>
                            <Skill src="/assets/tech/css-3-svgrepo-com.svg" alt="css3"></Skill>
                            <Skill src="/assets/tech/javascript.svg" alt="javascript"></Skill>
                            <Skill src="/assets/tech/react.svg" alt="react"></Skill>
                            <Skill src="/assets/tech/react-native-1.svg" alt="react native"></Skill>
                            <Skill src="/assets/tech/vue.svg" alt="vue"></Skill>
                            <Skill src="/assets/tech/vitejs.svg" alt="vitejs"></Skill>
                            <Skill src="/assets/tech/php.svg" alt="php"></Skill>
                            <Skill src="/assets/tech/mysql-icon.svg" alt="MySQL"></Skill>
                            <Skill src="/assets/tech/c-plusplus.svg" alt="c++"></Skill>
                            <Skill src="/assets/tech/blender.svg" alt="blender"></Skill>
                            <Skill src="/assets/tech/unrealengine-icon.svg" alt="unreal engine 5"></Skill>
                            <Skill src="/assets/tech/bash-icon.svg" alt="bash script"></Skill>
                            <Skill src="/assets/tech/github.svg" alt="github"></Skill>
                            <Skill src="/assets/tech/visual-studio-code.svg" alt="vscode"></Skill>
                        </div>
                </div>
                <div className="history-container">
                    <SectionHeader
                        title="About Me"
                    >
                    </SectionHeader>
                    <p className="history">
                        Hi! My name is "sickpoitew". I'm a 17-year-old student and IT enthusiast settled in Italy with 4 years of 
                        experience in programming. I'm an aspiring DevOps Engineer, and I'm constantly learning to become one.
                        I'm also a hobbyist game developer.<br />
                        <br />
                        As an aspiring DevOps Engineer, I have strong experience in various languages such as HTML, CSS, JavaScript,
                        React.JS, Vue.Js, PHP, MySQL and outside of web development, C++ and React Native. 
                        I'm also a Linux enthusiast; using (Arch)Linux every day, I have acquired strong experience in using the Bash shell. 
                        For game development, I have learned to use Unreal Engine 5 and Blender.<br/>
                        <br />
                        In my free time, I love discovering new technologies, reading books and listening to music. <br/>
                        Have an idea? Contact me!
                    </p>
                </div>         
            </div>
        </>
    );
}

export default AboutMe;