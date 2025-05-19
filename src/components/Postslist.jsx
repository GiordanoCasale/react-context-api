import React from 'react'
import Postcard from './Postcard'

const Postslist = ({ posts }) => {
    return (
        <div className="container py-5">
            <div className="row g-4">
                {posts.map(post => (
                    <Postcard
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        category={post.category}
                    />
                ))}
            </div>
        </div>
    )
}

export default Postslist
