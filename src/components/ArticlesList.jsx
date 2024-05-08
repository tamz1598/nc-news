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