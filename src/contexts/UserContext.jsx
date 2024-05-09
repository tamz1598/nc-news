import React, { createContext, useState } from 'react';

export const UserContext = createContext();

//wrap app in the provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser(username);
        console.log("Logged in as:", username);
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