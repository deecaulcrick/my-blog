import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../ui/BlogPost';
import { Link } from "react-router-dom";
import posts from '../../index/posts';

function SinglePost() {


    let { slug } = useParams();
    const [content, setContent] = useState('');


    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/posts/${slug}.md`);
                const data = await response.text();
                setContent(data);
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        };

        fetchContent();
    }, [slug]);

    const currentPost = posts.filter(post => post.slug === slug)

    console.log(currentPost[0].category);

    return (
        <div className="post">
            <Link to='/posts'>🡨 Back to all posts </Link>

            <div className="tools-container">
                {
                    currentPost[0].category.map((category) => (
                        <div className="tools">{category}</div>
                    ))
                }

            </div>
            <BlogPost content={content} />
            <div className="post-footer">
                <p>Reply via: <a href='mailto:deecaulcrick@gmail.com' target='_blank'>Email</a> or <a href='https://twitter.com/deecaulcrick' target='_blank'>Twitter</a></p>
            </div>

        </div>
    );
}

export default SinglePost