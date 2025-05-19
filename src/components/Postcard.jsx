import React from 'react'

const PostCard = ({ title, content, category }) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-3 hover-shadow">
                <div className="card-body d-flex flex-column">
                    <h2 className="card-title h5 fw-bold text-primary mb-3">{title}</h2>
                    <p className="card-text flex-grow-1 text-secondary mb-3">{content}</p>
                    <span className={`badge ${category.toLowerCase() === 'frontend'
                        ? 'bg-info text-dark'
                        : 'bg-success text-white'
                        } align-self-start px-3 py-2`}>
                        {category}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PostCard
