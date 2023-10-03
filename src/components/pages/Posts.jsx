import React from 'react'
import PostList from '../ui/PostList'
import posts from '../../index/posts'

function Posts() {


    console.log(posts);
    return (
        <div className="posts">
            <h1 className='page-title'>Posts</h1>
            <p className='page-desc'>My thoughts and explorations on computer science, web development, cool software, and the occasional meme. </p>

            <PostList posts={posts} />

        </div>
    )
}

export default Posts