import React from 'react'
import { useState } from 'react'

export default function SortArticles({setFilter}) {

    const [visible, setVisible] = useState(false);
    const [sort_by, setSortBy] = useState('created_at'); 
    const [order, setOrder] = useState('desc');

    const handleSort = () =>{
      setFilter({sort_by, order})
    };

    const toggleVisibility = () => {
        setVisible(!visible); // Toggle visibility state
    };

    return (
        <>
        <button className='filter-button' onClick={toggleVisibility}>{visible ? 'Hide Filters' : 'Show Filters'}</button>
            <div className='filter'>
            {visible && (
                <div>
                    <select className='initial-sort' value={sort_by} onChange={e => setSortBy(e.target.value)}>
                        <option value="created_at">Date</option>
                        <option value="votes">Votes</option>
                        <option value="comment_count">Comment Count</option>
                        <option value="author">Author</option>
                    </select>
                    <select className='initial-sort' value={order} onChange={e => setOrder(e.target.value)}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                    <button className='sortby-button' onClick={handleSort}>Sort Articles</button>
                </div>
            )}
            </div>
        </>

    )
}
