import React, { useEffect } from "react"

function Script(){
    useEffect(() => {

        const homeP = document.querySelector(".home");
        const aboutMeP = document.querySelector(".about-me");
        const projectsP = document.querySelector(".projects-nav-bar");
        const headerImage = document.querySelector(".logo-header");
        const color = "#0ea5e9";

        if(window.innerWidth < 992){
            headerImage.style.display = "none";
        }
        
        homeP.style.color = color;
        aboutMeP.style.color = "white";
        projectsP.style.color = "white";
        
        window.addEventListener("scroll", () => {
            const websitePosition = window.scrollY;
        
            if(websitePosition <= 350){
                homeP.style.color = color;
                aboutMeP.style.color = "white";
                projectsP.style.color = "white";
            }
            else if(websitePosition <= 1200){
                homeP.style.color = "white";
                aboutMeP.style.color = color;
                projectsP.style.color = "white";
            }
            else {
                homeP.style.color = "white";
                aboutMeP.style.color = "white";
                projectsP.style.color = color;
            }
        })
    })
}

export default Script;