import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import { getCommentsByArticleId, postCommentByArticleId} from '../utils/api';
import Comments from './Comments';
import { UserContext } from '../contexts/UserContext';

export default function CommentsList() {
    const [commentList, setCommentList] = useState([]);
    const { articleId } = useParams();
    const [commentBody, setCommentBody] = useState('');
    const { user } = useContext(UserContext); 

    //for loading purposes
    const [isSubmitting, setIsSubmitting] = useState(false); 

    useEffect(() => {
        if (articleId) {
            getCommentsByArticleId(articleId)
                .then((data) => {
                    console.log("Here is the response", data);
                    setCommentList(data.comments); 
                })
                .catch((error) => {
                    console.error("Error fetching comments:", error);
                });
        }
    }, [articleId]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!user) { // Check if a user is logged in
            alert("`Please login to comment or select a user to signup`.");
            return;
        }
        // catch no input entered. Alert the user.
        if (!commentBody.trim) {
            alert("Please enter a comment.");
            return;
        }
        //add user and body then post
        setIsSubmitting(true); 
        const comment = { username: user, body: commentBody };
        postCommentByArticleId(articleId, comment)
            .then(newComment => {
                setCommentList(prev => [...prev, newComment]); //similar to vote, add previous with new
                setCommentBody(''); // Clear the input after posting
                setIsSubmitting(false); 
                alert("Comment posted successfully!");
            })
            .catch(error => {
                console.error("Error posting comment:", error);
                setIsSubmitting(false);
                alert("Failed to post comment.");
            });
    }

    if (commentList.length === 0) {
        console.log("Article not set, showing loading"); 
        return <div>Loading...</div>;
    }

    if (isSubmitting) {
        return <div>Posting comment...</div>;  // Loading indicator while posting
    }

    return (
        <div className="commentsListContainer">
            <h1>Comments</h1>
            <form className='comment-form' onSubmit={handleSubmit}>
                <label className='username-comment' htmlFor="comment">Your Comment</label>
                <textarea
                 id="comment" 
                 value={commentBody} 
                 onChange={e => setCommentBody(e.target.value)}
                 placeholder="Write your comment here"
                 disabled={isSubmitting}
                 />
                <button className='submit-comment' type="submit" disabled={isSubmitting || !user}>{isSubmitting ? 'Posting, you may need to refresh' : 'Post Comment'}</button>
            </form>
            <ul>
                {commentList.map((comment) => (
                    <Comments key={comment.comment_id} comment={comment} />
                ))}
            </ul>
        </div>
    );
}
