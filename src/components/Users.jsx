import React from 'react'
import { useState, useEffect, useContext } from "react";
import { getUsers } from '../utils/api';
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

export default function Users(){
    
    const [username, setUsername] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [userList, setUserList] = useState([]);
    const { login } = useContext(UserContext);

    useEffect(() => {
        getUsers().then((response) => setUserList(response.users)) 
      }, []);

      const handleChange = (event) => {
        setInputUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if username exists in userList
        if (userList.some(user => user.username === inputUsername)) {
            login(inputUsername);
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
            <Link to="/signup">
            <button className="signup-button" target='./DefaultUserList'>Signup</button>
            </Link>
        </div>
    );
}
