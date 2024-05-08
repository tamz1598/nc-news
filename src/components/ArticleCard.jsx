import React from 'react'
import { getArticlesById } from '../utils/api';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import commentBox from '../assets/comment-box.svg'
import like from '../assets/love.svg'
import { updateArticles } from '../utils/api';

export default function ArticleCard(){

    const [article, setArticle] = useState(null);
    const {articleId} = useParams();
    //want button to disable after one vote
    const [hasVoted, setHasVoted] = useState(false);
    const [voteMessage, setVoteMessage] = useState("");

    useEffect(() => {
        if (articleId) {
            getArticlesById(articleId)
                .then((response) => {
                    setArticle(response.articles);
                })
                .catch((error) => {
                   console.log(error)
                   
                });
        }
    }, [articleId]);

    if (!article) {
        console.log("Article not set, showing loading"); 
        return <div>Loading...</div>;
    }

    //handleVote set to false till vote
    const handleVote = () => {
        if (!hasVoted) { 
        updateArticles(articleId, 1)
            .then(updatedArticle => {
                setArticle(prev => ({
                    ...prev,
                    votes: prev.votes + 1 
                }));
                setHasVoted(true);
                setVoteMessage("Thank you for voting!");
            })
            .catch(error => {
                console.log("Error incrementing votes:", error);
                setVoteMessage("Failed to record vote. Try again!");
            });
        }

    }

  return (
    <div className="article-card">
        {console.log(article.topic)}
        <h1>{article.title}</h1>
        <section className='card-numbers'>
        <h2 className='card-topic'>{article.topic}</h2>
        <h2 className='card-author'>{article.author}</h2>
        </section>
        <section>
            <p className='card-body'>{article.body}</p>
        </section>
        <section>
            <Link to={`/articles/${article.article_id}/comments`}>
            <img src={commentBox} className="logo-comment" alt="Comment Box Image" />
            </Link>
        </section>
        <section>
            <p className='card-vote'>{article.votes}</p>
        </section>
        <section>
             <button className='button-like' onClick={handleVote}disabled={hasVoted}>
             <img src={like} className="logo-like" alt="click to like and increase the vote" />
             </button>          
             {voteMessage && <p className="vote-message">{voteMessage}</p>}
        </section>
    </div>
  );
}
