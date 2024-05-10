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
    setSelectedUser(event.target.value);
};

    // Handle login button click
    const handleLogin = () => {
        if (selectedUser) {
            login(selectedUser);
            alert('Login successful');
        } else {
            alert('Please select a username from the list.');
        }
    };


  return (
    <>
    <div className='defaultName'>
        <h1> Choose default name </h1>
    </div>
      <div>
          <select className='textbox' value={selectedUser} onChange={handleSelectChange}>
          <option value="">Select a user</option>
              {userList.map(user => (
                  <option key={user.username} value={user.username}>
                      {user.username}
                  </option>
              ))}
          </select>
          <button className='login-button' onClick={handleLogin}>Login</button>
      </div>
  </>
  )
}