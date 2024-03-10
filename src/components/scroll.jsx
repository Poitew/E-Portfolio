import React, { useEffect } from "react"

function Scroll(){
    useEffect(() => {
        const homeP = document.querySelector(".home");
        const aboutMeP = document.querySelector(".about-me");
        const projectsP = document.querySelector(".projects-nav-bar");
            
        homeP.style.color = "white";
        aboutMeP.style.color = "darkgray";
        projectsP.style.color = "darkgray";
            
        if (window.innerWidth > 991.98) {
            const aura = document.createElement("div");
        
            aura.style.position = "fixed";
            aura.style.width = "50px";
            aura.style.height = "50px";
            aura.style.borderRadius = "50%";
            aura.style.backgroundImage = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(92,92,125,1) 50%, rgba(0,28,62,1) 100%)";
            aura.style.opacity = "0.5";
            aura.style.zIndex = "120";
            aura.style.pointerEvents = "none";
            aura.style.transition = "all 0.1s ease-out";
            aura.style.transform = "translate(-50%, -50%)";
            
            document.body.appendChild(aura);
            
            document.addEventListener("mousemove", (event) => {
                aura.style.left = event.clientX + "px";
                aura.style.top = event.clientY + "px";
            });
        
            document.addEventListener("mouseenter", () => {
                aura.style.width = "100px";
                aura.style.height = "100px";
                aura.style.opacity = "0.1";
            });
            
            document.addEventListener("mouseleave", () => {
                aura.style.width = "50px";
                aura.style.height = "50px";
                aura.style.opacity = "0.5";
            });
            
            document.addEventListener("scroll", () => {
                aura.style.left = event.clientX + "px";
                aura.style.top = event.clientY + "px";
            }); 
        
            window.addEventListener("scroll", () => {
                const websitePosition = window.scrollY;
            
                if(websitePosition <= 650){
                    homeP.style.color = "white";
                    aboutMeP.style.color = "darkgray";
                    projectsP.style.color = "darkgray";
                }
                else if(websitePosition >= 650 && websitePosition <= 1300){
                    homeP.style.color = "darkgray";
                    aboutMeP.style.color = "white";
                    projectsP.style.color = "darkgray";
                }
                else {
                    homeP.style.color = "darkgray";
                    aboutMeP.style.color = "darkgray";
                    projectsP.style.color = "white";
                }
            })
        }
        else {
            window.addEventListener("scroll", () => {
                const websitePosition = window.scrollY;
            
                if(websitePosition <= 350){
                    homeP.style.color = "white";
                    aboutMeP.style.color = "darkgray";
                    projectsP.style.color = "darkgray";
                }
                else if(websitePosition <= 1100){
                    homeP.style.color = "darkgray";
                    aboutMeP.style.color = "white";
                    projectsP.style.color = "darkgray";
                }
                else {
                    homeP.style.color = "darkgray";
                    aboutMeP.style.color = "darkgray";
                    projectsP.style.color = "white";
                }
            })
        }
    })
}

export default Scroll;