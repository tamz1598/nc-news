import React from 'react'

export default function Articles_Item({article}) {
    console.log(article)
  
      return (
        < div className='article-list'>
            <h3> {article.title} </h3>
            <img src={article.article_img_url}/>
            <p>{article.author}</p>
            <p>{article.comment_count}</p>
            <p>{article.votes}</p>
        </div>
      );
}

