import React from 'react'
import { useState, useEffect } from "react";

const DefaultUserList = ({setUsername}) => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  // Fetch user data
  useEffect(() => {
      fetch('https://be-nc-news-th.onrender.com/api/users')
          .then(response => response.json())
          .then(data => {
              setUserList(data.users);
              setSelectedUser(data.users[0].username);  // default selected user as the first in the list
          })
          .catch(error => console.error('Failed to load user data:', error));
  }, []);

   // Handle changing selected user
   const handleSelectChange = (event) => {
    setSelectedUser(event.target.value);
    setUsername(event.target.value);
};


  return (
    <>
    <div className='defaultName'>
        <h1> Choose default name </h1>
    </div>
      <div>
          <select className='textbox' value={selectedUser} onChange={handleSelectChange}>
              {userList.map(user => (
                  <option key={user.username} value={user.username}>
                      {user.username}
                  </option>
              ))}
          </select>
      </div>
  </>
  )
}

export default DefaultUserList