import { Link } from "react-router-dom";
import styles from "/src/css/posts/post-card.module.css";

interface BlogCardProps {
    title: string;
    date: string;
    topic: string;
    to: string;
}

function Blog_Card(props: BlogCardProps){
    return(
        <div className={styles.blog}>
            <Link className={styles.link} to={props.to} >
                <h2 className={styles.title} >{props.title}</h2>
                <p className={styles.description}>{props.date} - {props.topic}</p>
            </Link>
        </div>
    );
}

export default Blog_Card;