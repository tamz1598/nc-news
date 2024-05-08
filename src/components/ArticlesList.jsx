import React from 'react'
import { useEffect, useState } from 'react'
import Articles from './Articles';
import { getArticles } from '../utils/api';

export default function ArticlesList(){
    
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticles().then((response) => 
            setArticlesList(response.articles))
    }, []);

    if (articlesList.length === 0) {
        console.log("Article not set, showing loading"); 
        return <div>Loading...</div>;
    }
    
    return (
        <div className="articlesListContainer">
            <h1> Articles List </h1>
            <ul>
                {articlesList.map((article) => {
                    return <Articles
                    key={article.article_id}
                    article={article}
                    />
                })}
            </ul>
        </div>
    );
};