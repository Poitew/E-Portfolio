import React from "react"
import Project from "./project"
import SectionHeader from "./section-header"
import '/src/css/project-section.css'
import '/src/css/section-header.css'

function ProjectSection(){
    return(
        <div className="projects-section" id="projectID" >
            <SectionHeader
                title="Built projects"
            >
            </SectionHeader>
            <div className="projects-container">
                <Project
                    src="/assets/projects-img/cinema.jpg"
                    name="CineCritics" 
                    desc="Full stack CRUD project made with JS, PHP and SQL. 
                        CineCritics is an interactive website made for movie's lover where you can search, 
                        find and review you favourites movies, and if you change your mind you can always delete or modify your review."
                    tech1="CSS"
                    tech2="JavaScript"
                    tech3="PHP"
                    tech4="MySQL"
                    github="https://github.com/Poitew/CineCritics"
                ></Project>
                <Project
                    src="/assets/projects-img/leaf.jpg"
                    name="ClimateTracker" 
                    desc="ClimateTracker is a weather forecasting project made with React.js. 
                        ClimateTracker uses the OpenWeather API to allow users to search for any city and get its current weather conditions."
                    tech1="CSS"
                    tech2="React.JS"
                    tech3="API"
                    github="https://github.com/Poitew/ClimateTracker"
                >
                </Project>
                <Project
                    src="/assets/projects-img/shooting-stars.jpg"
                    name="E-Portfolio" 
                    desc="A personal e-portfolio built with modern web technologies to showcase my skills and projects and share my resume. 
                        It provides a clean and responsive layout to ensure a perfect experience on any device you're using."
                    tech1="CSS"
                    tech2="React.JS"
                    github="https://github.com/Poitew/E-Portfolio"
                >
                </Project>
                <Project
                    src="/assets/projects-img/abstract-paint.jpg"
                    name="BookRealm" 
                    desc="BookRealm is a project made with React.JS aimed to provide an increadible user experience through it's responsive GUI"
                    tech1="CSS"
                    tech2="React.JS"
                    github="https://github.com/Poitew/BookRealm"
                >
                </Project>
            </div>
        </div>
    );
}

export default ProjectSection;
