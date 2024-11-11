import HeaderFunc from '../components/app/header'
import Home from '../components/app/home'
import AboutMe from '../components/app/about-me'
import ProjectSection from '../components/app/project-section'
import Footer from '../components/app/footer'

function App(){
    return(
        <>
            <HeaderFunc></HeaderFunc>
            <Home></Home>
            <AboutMe></AboutMe>
            <ProjectSection></ProjectSection>
            <Footer></Footer>
        </>
    );
}

export default App;