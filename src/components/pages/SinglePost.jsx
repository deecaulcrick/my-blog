import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../ui/BlogPost';
import { Link } from "react-router-dom";

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

    return (
        <div className="post">
            <Link to='/posts'>🡨 Back to all posts </Link>
            <BlogPost content={content} />
            <p>Reply via: <a>Email</a> or <a>Twitter</a></p>
        </div>
    );
}

export default SinglePost