import React, { useEffect } from "react"

function Scroll(){
    useEffect(() => {

        const homeP = document.querySelector(".home");
        const aboutMeP = document.querySelector(".about-me");
        const projectsP = document.querySelector(".projects-nav-bar");
        const green = "#018f3f";
        
        homeP.style.color = "white";
        aboutMeP.style.color = green;
        projectsP.style.color = green;
            
        window.addEventListener("scroll", () => {
            const websitePosition = window.scrollY;
        
            if(websitePosition <= 650){
                homeP.style.color = "white";
                aboutMeP.style.color = green;
                projectsP.style.color = green;
            }
            else if(websitePosition >= 650 && websitePosition <= 1300){
                homeP.style.color = green;
                aboutMeP.style.color = "white";
                projectsP.style.color = green;
            }
            else {
                homeP.style.color = green;
                aboutMeP.style.color = green;
                projectsP.style.color = "white";
            }
        })
        window.addEventListener("scroll", () => {
            const websitePosition = window.scrollY;
        
            if(websitePosition <= 350){
                homeP.style.color = "white";
                aboutMeP.style.color = green;
                projectsP.style.color = green;
            }
            else if(websitePosition <= 1100){
                homeP.style.color = green;
                aboutMeP.style.color = "white";
                projectsP.style.color = green;
            }
            else {
                homeP.style.color = green;
                aboutMeP.style.color = green;
                projectsP.style.color = "white";
            }
        })
    })
}

export default Scroll;