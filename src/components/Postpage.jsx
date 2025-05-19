import React from 'react'
import Navbar from '../Navbar'
import PostsList from '../PostsList'

const PostsPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="text-center my-5">Our Blog Posts</h1>
                <PostsList />
            </div>
        </div>
    )
}

export default PostsPage
