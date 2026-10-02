import React from 'react'
type PostsCounterProps ={
    count: number;
}

function PostsCounter({count}: PostsCounterProps) {
    const label = count > 1 ? "posteos" : "posteo"
    
    return (
        <div>
            {count} {label}
        </div>
    )
}

export default PostsCounter