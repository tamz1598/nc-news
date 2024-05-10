import React, { createContext, useState, useEffect } from 'react';
import { getUsers } from '../utils/api';
export const UserContext = createContext();

//wrap app in the provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUsers().then(response => {
            setUserList(response.users);
            console.log(response.users)
        }).catch(error => {
            console.error("Failed to fetch users:", error);
        });
    }, []);


    const login = (username) => {
        const userData = userList.find(user => user.username === username);
        if (userData) {
            setUser(userData);
            console.log("Logged in as:", username);
        } else {
            console.error("User not found");
        }
    };

    const logout = () => {
        setUser(null);
    };

    //add 3 states, original - null, logged - username, loggedOut - null
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}