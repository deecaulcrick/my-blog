import React from 'react'
import { Link } from 'react-router-dom';

function PostList({ posts }) {
    return (
        <div className="post-list">
            {posts.map((post, id) => (
                <div className='post-card' key={id}>
                    <h2><Link to={`/posts/${post.slug}`}>{post.title}</Link></h2>
                    <p className='post-excerpt'>{post.excerpt}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList