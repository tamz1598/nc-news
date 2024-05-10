import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesByTopic } from '../utils/api';

export default function ArticlesByTopic() {

    const { topicSlug } = useParams();
    console.log(topicSlug)
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticlesByTopic(topicSlug)
            .then(data => {
                setArticles(data.articles)
                console.log(data.articles)
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, [topicSlug]);

    if (articles.length === 0) {
        return <div>Loading articles...</div>;
    }

  return (
        <div>
            <h1>Articles on {topicSlug}</h1>
            {articles.length > 0 ? (
                articles.map(article => (
                    <div key={article.article_id}>
                        <h2>{article.title}</h2>
                        <p>{article.author}</p>
                        <p>{article.votes} Votes</p>
                        <Link to={`/articles/${article.article_id}`}>
                        <img src={article.article_img_url} alt={article.title} style={{ cursor: 'pointer' }} />
                        </Link>
                        <p>{article.comment_count} Comments</p>
                    </div>
                ))
            ) : (
                <p>No articles found for this topic.</p>
            )}
        </div>
  )
}
