import React from 'react'
import { useState, useEffect, useContext } from "react";
import { getUsers } from '../utils/api';
import { UserContext } from '../contexts/UserContext';

export default function DefaultUserList(){

  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const { login } = useContext(UserContext);

  // Fetch user data
  useEffect(() => {
      getUsers().then((response) => 
        setUserList(response.users)) // default selected user as the first in the list
  }, []);

   // Handle changing selected user
   const handleSelectChange = (event) => {
    const username = event.target.value;
    setSelectedUser(username);
    setUsername(username);
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