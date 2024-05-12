import React from 'react'

export default function Comments({comment}){
    if (!comment) {
        return <div>Loading Comment...</div>;
    }

  return (
    <div className='comment-box'>
        <h3>{comment.body}</h3>
        <section>
            <p>{comment.author}</p>
            <p>{comment.votes}</p>
            <p>{new Date(comment.created_at).toDateString()}</p>

        </section>
    </div>
  )
}
