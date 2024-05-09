import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getCommentsByArticleId, postCommentByArticleId, getUsers } from '../utils/api';
import Comments from './Comments';

export default function CommentsList() {
    const [commentList, setCommentList] = useState([]);
    const { articleId } = useParams();
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [commentBody, setCommentBody] = useState('');

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
        //getUsers similar to DefaultUserList
        getUsers()
            .then(response => setUserList(response.users))
            .catch(error => console.error("Error fetching users:", error));
    }, [articleId]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        // catch no input entered. Alert the user.
        if (!selectedUser || !commentBody) {
            alert("Please select a user and enter a comment.");
            return;
        }
        //add user and body then post
        const comment = { username: selectedUser, body: commentBody };
        postCommentByArticleId(articleId, comment)
            .then(newComment => {
                setCommentList(prev => [...prev, newComment]); //similar to vote, add previous with new
                setCommentBody('');  // Clear the input after posting
                alert("Comment posted successfully!");
            })
            .catch(error => {
                console.error("Error posting comment:", error);
                alert("Failed to post comment.");
            });
    }

    if (commentList.length === 0) {
        console.log("Article not set, showing loading"); 
        return <div>Loading...</div>;
    }

    //make form
    //copy and paste from my defaultUserList part

    return (
        <div className="commentsListContainer">
            <h1>Comments</h1>
            <form className='comment-form' onSubmit={handleSubmit}>
                <label className='username-comment' htmlFor="username-comment">Choose a user:</label>
                <select id="username-comment-box" value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
                    <option value="">Select a user</option>
                    {userList.map(user => (
                        <option key={user.username} value={user.username}>{user.username}
                        </option>
                    ))}
                </select>
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" value={commentBody} onChange={e => setCommentBody(e.target.value)} />
                <button className='submit-comment' type="submit">Post Comment</button>
            </form>
            <ul>
                {commentList.map((comment) => (
                    <Comments key={comment.comment_id} comment={comment} />
                ))}
            </ul>
        </div>
    );
}
