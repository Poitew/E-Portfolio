import HeaderFunc from './header'
import Firstbg from './first-background'
import Script from "./script"
import AsideFunc from './aside'
import Presentation from './presentation'
import AboutMe from './about-me'
import ProjectSection from './project-section'
import Footer from './footer'
import "/src/css/responsive.css"

function App(){
    return(
        <>
            <HeaderFunc></HeaderFunc>
            <Firstbg></Firstbg>
            <AsideFunc></AsideFunc>
            <Presentation></Presentation>
            <AboutMe></AboutMe>
            <ProjectSection></ProjectSection>
            <Footer></Footer>
            <Script></Script>
        </>
    );
}

export default App;