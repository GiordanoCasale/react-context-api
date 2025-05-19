import React from 'react'
import Navbar from '../Navbar';

const posts = [
    { id: 1, title: 'React Basis', content: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.', category: 'FrontEnd' },
    { id: 2, title: 'What is Express.js?', content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', category: 'Backend' },
    { id: 3, title: 'Run JavaScript Everywhere', content: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.', category: 'Backend' },
    { id: 4, title: 'Build fast, responsive sites with Bootstrap', content: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.', category: 'Frontend' },
];

const Posts = () => {
    return (
        <div className="bg-light min-vh-100">
            <Navbar />
            <div className="container py-5">
                <h1 className="text-center mb-5 text-primary">Our Blog Posts</h1>
                <div className="row g-4">
                    {posts.map(post => (
                        <div key={post.id} className="col-md-6">
                            <div className="card h-100 shadow-sm hover-shadow transition">
                                <div className="card-body">
                                    <h2 className="card-title h4 text-secondary">{post.title}</h2>
                                    <p className="card-text text-muted">{post.content}</p>
                                    <span className={`badge ${post.category.toLowerCase() === 'frontend' ? 'bg-info' : 'bg-success'}`}>
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Posts
