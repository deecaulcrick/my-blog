import React from 'react'
import posts from '../../index/posts'
import { Link } from 'react-router-dom';

function LatestPosts() {

    const latestPosts = posts.slice(0, 3);

    console.log(latestPosts); // Output: [1, 2, 3, 4]

    return (
        <div className="latest-posts">
            <h3>LATEST POSTS</h3>
            {latestPosts.map((latestPost, id) => (
                <div className='post-card' key={id}>
                    <h2><Link to={`/posts/${latestPost.slug}`}>{latestPost.title}</Link></h2>
                    <p className='post-excerpt'>{latestPost.excerpt}</p>
                </div>
            ))}
        </div>
    )
}

export default LatestPosts