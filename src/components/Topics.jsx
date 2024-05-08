import React from 'react'
import { useEffect, useState } from 'react'
import { getTopics } from '../utils/api';

export default function Topics() {
    const [topics, setTopics] = useState("");
    const [topicsLists, setTopicsLists] = useState([]);

    useEffect(() => {
        getTopics()
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
