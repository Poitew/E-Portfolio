import styles from "/src/css/app/home.module.css";
import icons from "/src/data/json/home-icons.json";

function Home(){
    return(
        <main className={styles.home} id="home" >
            <Presentation></Presentation>
            <AsideFunc></AsideFunc>
        </main>
    );
}

function Presentation(){
    const icons_json: any[] = icons;

    return (
        <div className={styles.presentationContainer}>
            <h1 className={styles.presentation} >
                I'm <span className={styles.span} >SickPoitew</span>, 
                Software Developer and DevOps Engineer.
            </h1>

            <div className={styles.glow}></div>

            <ul className={styles.list}>
                {icons_json.map((element, index) => (
                    <li key={index} className={styles.li} ><img className={styles.img} src={element.src} alt={element.alt} />{element.content}</li>
                ))}
            </ul>

            <p className={styles.description} >
                I enjoy writing code, create CI/CD pipeline, Docker Images and in general everything about the software development
                lifecycle! <br/>
                <span className={styles.spanDesc} >
                    In my free time I like to create projects and publish them on my GitHub, I also like to study, read books and write
                    all my thoughts in here. Bye!
                </span>
            </p>

            <div className={`${styles.btn} ${styles.btn2}`}>
                <a className={styles.btnContent} href="#about-me-ID">Know More!</a>
            </div>
            
            <div className={styles.btn}>
                <a className={styles.btnContent} href="#projects-section">Projects</a>
            </div>
        </div>
    );
}

function AsideFunc(){
    return(
        <aside className={styles.aside}>
            <a 
              href="https://twitter.com/sickpoitew" 
              rel="noopener noreferrer"
              target="_blank"
            >
                <img className={styles.asideImg} src="/assets/icons/x-twitter.svg" alt="twitter" />
            </a>

            <a
              href="https://github.com/Poitew"
              rel="noopener noreferrer"
              target="_blank"
            >
                <img className={styles.asideImg} src="/assets/tech/github.svg" alt="github" />
            </a>
        </aside>
    );
}

export default Home;