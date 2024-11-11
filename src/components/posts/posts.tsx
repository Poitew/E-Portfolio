import Blog_Card from "./post-card";
import styles from "/src/css/posts/posts.module.css";
import posts_json from "/src/data/json/posts.json";

function Posts(){
    const posts: any[] = posts_json;

    return(
        <main className={styles.posts} >
            {posts.map((element, index) => (
                <Blog_Card
                    title={element.title}
                    date={element.date}
                    topic={element.topic}
                    to={element.to}
                    key={index}
                />
            ))}
        </main>
    );
}

export default Posts;