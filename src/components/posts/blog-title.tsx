import { Link } from "react-router-dom";
import styles from "/src/css/posts/post-title.module.css"

function Blog_title(){
    return(
        <div className={styles.titleContainer}>
            <h1 className={styles.title} >My Thoughts</h1>
            <p className={styles.description} >a collection of ideas and knowledge</p>
            <Link className={styles.link} to="/">return to home...</Link>
        </div>
    );
}

export default Blog_title;