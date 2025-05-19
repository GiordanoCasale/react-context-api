import { useContext } from 'react'
import { PostsContext } from '../contexts/PostsContext'
import PostCard from './PostCard'

const PostsList = () => {
    const posts = useContext(PostsContext)

    return (
        <div className="container py-5">
            <div className="row g-4">
                {posts.map(post => (
                    <PostCard
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

export default PostsList
