import React, {useState, useRef} from "react"
import '/src/css/header.css'

function HeaderFunc(){

    const [menu, setMenu] = useState<Boolean>(false);
    const ham_btn = useRef<HTMLButtonElement | null>(null);
    const header = useRef<HTMLElement | null>(null);
    const width: number = window.innerWidth;

    function handleMenu(){

        setMenu(prevMenu => !prevMenu);

        if(!menu){ // Show Menu
            if (ham_btn.current && header.current) {
                ham_btn.current.style.background = "#0c0719";
                header.current.style.boxShadow = "0px -20px 20px 5px black";
            }
        }
        else { // Hide Menu
            if (ham_btn.current && header.current) {
                ham_btn.current.style.background = "transparent";
                header.current.style.boxShadow = "none";
            }
        }
    }

    return(
        <header ref={header} >
            {
                (width <= 600) ? <button ref={ham_btn} onClick={handleMenu} id="ham_btn" ><img src="/assets/icons/ham_menu.svg" alt="Hamburger Menu" /></button> :
                <>
                    <a href="#about-me-ID" id="logo-a" >
                        <div className="logo-header">
                            <img src="/assets/icons/logo.png" alt="Code Logo" id="js-logo-img" />
                            <p>SICKPOITEW</p>
                        </div>
                    </a>
                    <a href="#homeID">
                        <div className="home nav-bar-divs">
                            <p>HOME</p>
                        </div>
                    </a>
                    <a href="#about-me-ID">
                        <div className="about-me nav-bar-divs">
                            <p>ABOUT ME</p>
                        </div>
                    </a>
                    <a href="#projects-section">
                        <div className="projects-nav-bar nav-bar-divs">
                            <p>PROJECTS</p>
                        </div>
                    </a>
                </>
            }

            {menu && (<ul id="ham_menu" >
                <li><a href="#main-home"><p>Home</p></a></li>
                <li><a href="#about-me-ID"><p>About Me</p></a></li>
                <li><a href="#projects-section"><p>Projects Section</p></a></li>
            </ul>)}
        </header>
    );
}

export default HeaderFunc;