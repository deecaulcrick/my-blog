import React from 'react'
import PostList from '../ui/PostList'
import posts from '../../index/posts'

function Posts() {


    console.log(posts);
    return (
        <div className="posts">
            <h1 className='page-title'>Posts</h1>
            <p className='page-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <PostList posts={posts} />

        </div>
    )
}

export default Posts