import React from 'react'
import { Link } from 'react-router-dom'

export default function Articles_Item({article}) {
  
      return (
        < div className='article-list'>
            <h3> {article.title} </h3>
            <Link to={`/articles/${article.article_id}`}>
            <img src={article.article_img_url}/>
            </Link>
            <p>{article.author}</p>
            <p>{article.comment_count}</p>
            <p>{article.votes}</p>
        </div>
      );
}

