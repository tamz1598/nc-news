import React from 'react'
import { useEffect, useState } from 'react'
import Articles_Item from './Articles_Item';
import { getArticles } from '../utils/api';

export default function Articles(){
    // const [articles, setArticles] = useState("");
    // const [articlesId, setArticlesId] = useState("");
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticles().then((response) => 
            setArticlesList(response.articles))
    }, []);
    
    // const handleClick = (e) => {
    //     const articlesId = e.target.article_id;
    //     setArticlesId(articlesId);
    // };

    return (
        <div className="articlesListContainer">
            <h1> Articles List </h1>
            <ul>
                {articlesList.map((article) => {
                    return <Articles_Item
                    key={article.article_id}
                    article={article}
                    // handleClick={handleClick}
                    />
                })}
            </ul>
        </div>
    );
};
