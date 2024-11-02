import React, { useEffect } from "react";

function Script() {
    useEffect(() => {
        const header = document.querySelector("header") as HTMLHeadElement; 
        const headerImage = document.querySelector("#js-logo-img") as HTMLImageElement | null;
        const homeP = document.querySelector(".home") as HTMLElement | null;
        const aboutMeP = document.querySelector(".about-me") as HTMLElement | null;
        const projectsP = document.querySelector(".projects-nav-bar") as HTMLElement | null;

        const color: string = "#0ea5e9";

        if (homeP) homeP.style.color = color;
        if (aboutMeP) aboutMeP.style.color = "white";
        if (projectsP) projectsP.style.color = "white";

        const handleScroll = () => {
            const websitePosition = window.scrollY;

            // Changes the logo size
            if (window.innerWidth > 767) {
                if (header) {
                    header.style.background = websitePosition >= 50 ? "rgba(12, 7, 24, 1)" : "rgba(12, 7, 24, 0)";
                }
                if (headerImage) {
                    headerImage.style.width = websitePosition >= 50 ? "4vw" : "12vw";
                }
            }

            // Changes the header links color depending on which section of the page you are
            if (homeP && aboutMeP && projectsP) {
                if (websitePosition <= 350) {
                    homeP.style.color = color;
                    aboutMeP.style.color = "white";
                    projectsP.style.color = "white";
                } else if (websitePosition <= 1200) {
                    homeP.style.color = "white";
                    aboutMeP.style.color = color;
                    projectsP.style.color = "white";
                } else {
                    homeP.style.color = "white";
                    aboutMeP.style.color = "white";
                    projectsP.style.color = color;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
}

export default Script;
