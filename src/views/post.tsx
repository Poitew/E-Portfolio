import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import styles from "/src/css/posts/post.module.css"

function Post() {
    const { n_post }: any = useParams();
    const [content, setContent] = useState<string>("");
    const posts = import.meta.glob("/src/data/posts/*.md", { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

    useEffect(() => {
        const postKey = `/src/data/posts/${n_post}.md`;
        
        if (posts[postKey]) {
            setContent(posts[postKey]);
        }
        else {
            setContent("Post not found");
        }
    }, [n_post]);

    return (
        <main className={styles.post} id="post">
            
            <Link className={styles.link} to="/posts">Return to posts</Link> <br/>
            <hr className={styles.hr} />

            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <p className={styles.p} {...props} />,
                    code: ({ node, ...props }) => <code className={styles.code} {...props} />,
                    h2: ({ node, ...props }) => <h2 className={styles.h2} {...props} />,
                }}
            >{content}</ReactMarkdown>
        </main>
    );
}

export default Post;