"use client";
import React, { useEffect, useState } from "react";

import UserContext from "./UserDetailsContext";


const UserContextProvider = ({ children }: any) => {
    const [user, setUser] = useState({});

    const getUser = async () => {
        const response = await fetch("/api/details");
        const user = await response.json();
        setUser(user);
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;