import { Link } from "react-router-dom";
import skills from "/src/data/json/skill.json"
import styles from '/src/css/app/about-me.module.css'

interface skill_element {
    src: string;
    alt: string;
}

function AboutMe(){

    const SoftwareDev_skills: any[] = skills.SoftwareDev;
    const DevOps_skills: any[] = skills.DevOps;

    return(
        <>
            <div className={styles.section} id="about-me-ID" >
                <div className={styles.skillsContainer}>
                    <Skills
                        skills_arr={SoftwareDev_skills}
                    ></Skills>

                    <Skills
                        skills_arr={DevOps_skills}
                    ></Skills>
                </div>

                <div className={styles.historyContainer}>
                    <SectionHeader
                        title="About Me & Projects"
                    >
                    </SectionHeader>
                    <p className={styles.history}>
                        Hi! My name is "sickpoitew". I'm a 17-year-old student and IT enthusiast settled in Italy with 4 years of 
                        experience in programming. I'm also a Software Developer and DevOps Engineer costantly studying to enchance my
                        knowledge.
                        <br />
                        <br />
                        As a Software Developer I have strong experience in various languages such as HTML, CSS, JavaScript / TypeScript,
                        React.JS, Vue.Js, PHP with JWT for Login, MySQL and outside of web development: C++.
                        While as a DevOps I have experience in using the Linux operating system and Bash/Python for automating tasks, I'm also
                        proficient in using tools such as Docker for deployment and Jenkins for CI/CD.
                        <br/>
                        <br />
                        In my free time I love studying anything tech-related, reading books and listening to music;
                        sometimes I also partecipate in Hackathons, you can find all my&nbsp;
                        <a href="https://github.com/Poitew/Hackathons" className={styles.link} >projects here</a>. <br/>
                        I think a lot so I decided to start writing all my thoughts (and tutorials) in here;
                        you can find this section by clicking the link just down below. 
                    </p>
                </div>         
            </div>

            <Blog_btn/>
        </>
    );
}

interface SkillsProps {
    skills_arr: any[]
}

function Skills(props: SkillsProps){
    return(
        <div>
            <p className={styles.skillsTitle} >Software Development</p>
            <div className={styles.grid}>
                {props.skills_arr.map((element: skill_element, index: number) => (
                    <img
                        key={index}
                        src={element.src}
                        alt={element.alt}
                        loading="lazy"
                        className={styles.skills}
                    ></img>
                ))}
            </div>
        </div>
    );
}

interface SectionHeaderProps {
    title: string;
}

function SectionHeader(props: SectionHeaderProps){
    return(
        <div className={styles.title}>
            <hr className={styles.hr} />
            <h2 className={styles.h2} >{props.title}</h2>
        </div>
    );
}

function Blog_btn(){
    return(
        <div className={styles.thoughts} >
            <Link to="/posts" className={styles.linkThoughts} >Browse posts...</Link>
        </div>
    );
}

export default AboutMe;