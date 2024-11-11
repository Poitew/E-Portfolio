import styles from '/src/css/app/footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sitemap}>
                <ul className={styles.list}>
                    <li className={styles.li} ><a href="#home">Home</a></li>
                    <li className={styles.li} ><a href="#about-me-ID">About Me</a></li>
                    <li className={styles.li} ><a href="#projects-section">Projects</a></li>
                </ul>

                <div className={styles.container}>
                    <Icon
                        href="https://www.github.com/Poitew"
                        src="/assets/tech/github.svg"
                        alt="Github"
                    ></Icon>

                    <Icon
                        href="https://twitter.com/sickpoitew"
                        src="/assets/icons/x-twitter.svg"
                        alt="Twitter"
                    ></Icon>
                </div>

                <p className={styles.thanks} >Made with love by sickpoitew</p>
            </div>
        </footer>
    );
}

interface IconProp {
    href: string;
    src: string;
    alt: string;
}

function Icon(props: IconProp){
    return (
        <a 
            href={props.href}
            rel="noopener noreferrer"
            target="_blank"
        >  
            <img className={styles.icon} src={props.src} alt={props.alt} />
        </a>
    );
}

export default Footer;