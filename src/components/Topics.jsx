import React from 'react'
import { useEffect, useState } from 'react'
import { getTopics } from '../utils/api';
import { useNavigate } from 'react-router-dom'


export default function Topics() {
    // const [topics, setTopics] = useState("");
    const [topicsLists, setTopicsLists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getTopics()
          .then((data) => setTopicsLists(data.topics))
          .catch(error => console.error('topics not here:', error));
      }, [setTopicsLists]);
    
    const handleClick = (topicSlug) => {
        console.log(topicSlug)
        navigate(`/topics/${topicSlug}`);
    };

    if (topicsLists.length === 0) {
      console.log("Article not set, showing loading"); 
      return <div>Loading...</div>;
  }

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
