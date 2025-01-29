import HeaderFunc from '../components/app/header/header'
import Home from '../components/app/home/home'
import AboutMe from '../components/app/about-me/about-me'
import ProjectsSection from '../components/app/projects-section/projects-section'
import Footer from '../components/app/footer/footer'

function App(){
    return(
        <>
            <HeaderFunc></HeaderFunc>
            <Home></Home>
            <AboutMe></AboutMe>
            <ProjectsSection></ProjectsSection>
            <Footer></Footer>
        </>
    );
}

export default App;