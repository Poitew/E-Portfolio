import React from "react"
import HeaderFunc from './header'
import Firstbg from './first-background'
import Particles from "./canvas"
import Scroll from "./scroll"
import AsideFunc from './aside'
import Presentation from './presentation'
import AboutMe from './about-me'
import ProjectHeader from './project-header'
import ProjectSection from './project-section'
import FooterFunc from './footer'
import "/src/css/responsive.css"

function App(){
    return(
        <>
            <HeaderFunc></HeaderFunc>
            <Firstbg></Firstbg>
            <Particles></Particles>
            <Scroll></Scroll>
            <AsideFunc></AsideFunc>
            <Presentation></Presentation>
            <AboutMe></AboutMe>
            <ProjectHeader></ProjectHeader>
            <ProjectSection></ProjectSection>
            <FooterFunc></FooterFunc>
        </>
    );
}

export default App;