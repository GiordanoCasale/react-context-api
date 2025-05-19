import React from 'react'

const Postcard = ({ title, content, category }) => {
    return (
        <div className="col-md-6">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title h4">{title}</h2>
                    <p className="card-text">{content}</p>
                    <span className="badge bg-primary">{category}</span>
                </div>
            </div>
        </div>
    )
}

export default Postcard
