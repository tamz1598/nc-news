import React from 'react'
import { getArticlesById } from '../utils/api';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function ArticleCard(){

    const [article, setArticle] = useState(null);
    const {articleId} = useParams();

    useEffect(() => {
        if (articleId) {
            getArticlesById(articleId)
                .then((response) => {
                    setArticle(response.articles);
                })
                .catch((error) => {
                   
                });
        }
    }, [articleId]);

    if (!article) {
        console.log("Article not set, showing loading"); 
        return <div>Loading...</div>;
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
    </div>
  );
}
