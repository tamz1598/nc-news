import React from 'react'
import { useState, useEffect } from "react";

const Users = ({setUsername}) => {
    const [inputUsername, setInputUsername] = useState("");
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch(`https://be-nc-news-th.onrender.com/api/users`)
          .then((response) => response.json())
          .then(data => setUserList(data.users)) 
          .catch(error => console.error('username not found:', error));
      }, []);

      const handleChange = (event) => {
        setInputUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if username exists in userList
        const userExists = userList.some(user => user.username === inputUsername);
        if (userExists) {
            setUsername(inputUsername);
            alert('Login successful');
            //username can now be carried as inputUsername
        } else {
            alert('Username not found');
        }
        setInputUsername("");
    };

    return (
        <div className="user-container">
            <form className='searchForm' onSubmit={handleSubmit}>
                <label className='label-username' htmlFor='username'>Username</label>
                <input 
                    id='username'
                    className='textbox'
                    value={inputUsername}
                    type='text'
                    placeholder='username'
                    onChange={handleChange}
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <button className="signup-button" target='./DefaultUserList'>Signup</button>
        </div>
    );
}

export default Users