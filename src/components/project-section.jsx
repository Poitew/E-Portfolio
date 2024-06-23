import React from "react"
import Project from "./project"
import SectionHeader from "./section-header"
import '/src/css/project-section.css'
import '/src/css/section-header.css'

function ProjectSection(){

    const descriptions = {
        Cinecritics: "Full stack CRUD project made with JS, PHP and SQL. CineCritics is an interactive website made for movie's lover where you can search, find and review you favourites movies, and if you change your mind you can always delete or modify your review.",
        ClimateTracker: "ClimateTracker is a weather forecasting project made with React.js. ClimateTracker uses the OpenWeather API to allow users to search for any city and get its current weather conditions.",
        E_Portfolio: "A personal e-portfolio built with modern web technologies to showcase my skills and projects and share my resume. It provides a clean and responsive layout to ensure a perfect experience on any device you're using.",
        Book_Realm: "Full stack project that uses Vue.JS as a frontend framework and PHP + MariaDB for the backend. Book Realm is a website where you can search the name of a book and get back all informations about it and a preview of the book."
    }

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
                    desc={descriptions.Cinecritics}
                    tech1="CSS"
                    tech2="JavaScript"
                    tech3="PHP"
                    tech4="MySQL"
                    github="https://github.com/Poitew/CineCritics"
                ></Project>
                <Project
                    src="/assets/projects-img/abstract-paint.jpg"
                    name="Book Realm" 
                    desc={descriptions.Book_Realm}
                    tech1="CSS"
                    tech2="Vue.JS"
                    tech3="PHP"
                    tech4="MariaDB"
                    tech5="API"
                    github="https://github.com/Poitew/Book-Realm"
                >
                </Project>
                <Project
                    src="/assets/projects-img/shooting-stars.jpg"
                    name="E-Portfolio" 
                    desc={descriptions.E_Portfolio}
                    tech1="CSS"
                    tech2="React.JS"
                    github="https://github.com/Poitew/E-Portfolio"
                >
                </Project>
                <Project
                    src="/assets/projects-img/leaf.jpg"
                    name="ClimateTracker" 
                    desc={descriptions.ClimateTracker}
                    tech1="CSS"
                    tech2="React.JS"
                    tech3="API"
                    github="https://github.com/Poitew/ClimateTracker"
                >
                </Project>
            </div>
        </div>
    );
}

export default ProjectSection;
