import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getCommentsBArticleId } from '../utils/api';
import Comments from './Comments';

export default function CommentsList() {
    const [commentList, setCommentList] = useState([]);
    const { articleId } = useParams();

    useEffect(() => {
        if (articleId) {
            getCommentsBArticleId(articleId)
                .then((data) => {
                    console.log("Here is the response", data);
                    setCommentList(data.comments);  // Assuming data.comments is the array of comments
                })
                .catch((error) => {
                    console.error("Error fetching comments:", error);
                });
        }
    }, [articleId]); // Ensuring useEffect is responsive to changes in articleId

    return (
        <div className="commentsListContainer">
            <h1>Comments</h1>
            <ul>
                {commentList.map((comment) => (
                    <Comments key={comment.comment_id} comment={comment} />
                ))}
            </ul>
        </div>
    );
}
