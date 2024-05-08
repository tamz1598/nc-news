import React from 'react'
import { useEffect, useState } from 'react'
import Articles_Item from './Articles_Item';
import { getArticles } from '../utils/api';

export default function Articles(){
    
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
                    return <Articles_Item
                    key={article.article_id}
                    article={article}
                    />
                })}
            </ul>
        </div>
    );
};