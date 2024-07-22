import React, { useEffect } from "react"

function Script(){
    useEffect(() => {

        const header = document.getElementsByTagName("header");
        
        const header_image = document.querySelector("#js-logo-img");

        const homeP = document.querySelector(".home");
        const aboutMeP = document.querySelector(".about-me");
        const projectsP = document.querySelector(".projects-nav-bar");

        const color = "#0ea5e9";
        
        homeP.style.color = color;
        aboutMeP.style.color = "white";
        projectsP.style.color = "white";
        
        window.addEventListener("scroll", () => {
            const websitePosition = window.scrollY;
            
            // Changes the logo size
            if(window.innerWidth > 767){
                if (websitePosition >= 50) {
                    header[0].style.background = "rgba(12, 7, 24, 1)";
                    header_image.style.width = "4vw";
                } else {
                    header[0].style.background = "rgba(12, 7, 24, 0)";      
                    header_image.style.width = "12vw";
                }
            }   

            // Changes the header links color depending in which section of the page you are
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

    }, [])

    return null;
}

export default Script;