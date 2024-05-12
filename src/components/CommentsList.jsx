import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import { getCommentsByArticleId, postCommentByArticleId, deleteCommentById} from '../utils/api';
import Comments from './Comments';
import { UserContext } from '../contexts/UserContext';

export default function CommentsList() {
    const [commentList, setCommentList] = useState([]);
    const { articleId } = useParams();
    const [commentBody, setCommentBody] = useState('');
    const { user } = useContext(UserContext); 
    const navigate = useNavigate(); //used to refresh the page and naviagte back after posting

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
        if (!commentBody.trim()) {
            alert("Please enter a comment.");
            return;
        }
        //add user and body then post
        setIsSubmitting(true); 
        const comment = { username: user.username, body: commentBody };
        console.log(commentBody)
        console.log(user)
        postCommentByArticleId(articleId, comment)
            .then(newComment => {
                setCommentList(prev => [...prev, newComment]); //similar to vote, add previous with new
                setCommentBody(''); // Clear the input after posting
                setIsSubmitting(false); 
                console.log(newComment)
                alert("Comment posted successfully!");
            })
            .catch(error => {
                console.error("Error posting comment:", error);
                setIsSubmitting(false);
                alert("Failed to post comment.");
            });
    };

    const handleDelete = (commentId) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            deleteCommentById(commentId)
                .then(() => {
                    setCommentList(commentList.filter(comment => comment.comment_id !== commentId));
                    alert("Comment deleted successfully!");
                })
                .catch(error => {
                    console.error("Failed to delete comment:", error);
                    alert("Failed to delete comment.");
                });
        }
    };

    if (commentList.length === 0) {
        console.log("Article not set, showing loading"); 
        return <div>Loading...</div>;
    }

    if (isSubmitting) {
        return <div>Posting comment...</div>;  // Loading indicator while posting
    }

    //when deleting check if user signed in is the same as the comments username

    console.log(commentList)
    console.log(user)

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
                    <li key={comment.comment_id}>
                        <Comments comment={comment} />
                        {user && user.username === comment.author && (
                            <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
