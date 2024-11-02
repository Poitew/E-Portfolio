import HeaderFunc from './header'
import Home from './home'
import Script from "./script"
import AboutMe from './about-me'
import ProjectSection from './project-section'
import Footer from './footer'
import "/src/css/responsive.css"

function App(){
    return(
        <>
            <HeaderFunc></HeaderFunc>
            <Home></Home>
            <AboutMe></AboutMe>
            <ProjectSection></ProjectSection>
            <Footer></Footer>
            <Script></Script>
        </>
    );
}

export default App;