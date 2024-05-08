import React from 'react'
import { useState, useEffect } from "react";
import { getUsers } from '../utils/api';

export default function DefaultUserList(){

  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  // Fetch user data
  useEffect(() => {
      getUsers().then((response) => 
        setUserList(response.users)) // default selected user as the first in the list
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