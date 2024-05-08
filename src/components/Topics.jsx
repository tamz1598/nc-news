import React from 'react'
import { useEffect } from 'react'
import Articles from './Articles'

const Topics = ({ topicsLists, setTopicsLists, setTopics}) => {

    useEffect(() => {
        fetch(`https://be-nc-news-th.onrender.com/api/topics`)
          .then((response) => response.json())
          .then((data) => setTopicsLists(data.topics))
          .catch(error => console.error('topics not here:', error));
      }, [setTopicsLists]);
    
    const handleClick = (e) => {
    const topics = e.target.slug;
    setTopics(topics);
    };

      return (
        <div className="topicListContainer">
             {topicsLists && topicsLists.map(topic => (
                 <button 
                 key={topic.slug}
                 onClick={() => handleClick(topic.slug)}>  
                <span className="button-topic">{topic.slug}</span>
                </button>
            ))}
        </div>
    );
}

export default Topics