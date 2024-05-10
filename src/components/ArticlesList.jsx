import React from 'react'
import { useEffect, useState } from 'react'
import Articles from './Articles';
import { getArticles, getArticlesBySort } from '../utils/api';
import SortArticles from './SortArticles';

export default function ArticlesList(){
    
    const [articlesList, setArticlesList] = useState([]);
    const [filter, setFilter] = useState({ sort_by: null, order: 'desc' });

    useEffect(() => {
        const fetchArticles = () => {
            const fetchFunction = filter.sort_by ? getArticlesBySort : getArticles;
            fetchFunction(filter.sort_by, filter.order)
                .then(response => {
                    const articlesWithConvertedCounts = response.articles.map(article => ({
                        ...article,
                        comment_count: parseInt(article.comment_count, 10)  // Convert comment_count to an integer
                    }));
                    setArticlesList(articlesWithConvertedCounts);
                })
                .catch(error => console.error('Failed to fetch articles:', error));
        };
        fetchArticles();
    }, [filter]);

    if (articlesList.length === 0) {
        console.log("Article not set, showing loading"); 
        return <div>Loading...</div>;
    }
    
    return (
        <div className="articlesListContainer">
            <h1> Articles List </h1>
            <SortArticles setFilter={setFilter} />
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