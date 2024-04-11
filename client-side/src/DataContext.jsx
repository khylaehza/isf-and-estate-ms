import React, { createContext, useState, useContext, useEffect } from "react";
import axiosClient from "./axiosClient";
const DataContext = createContext({
    curUser: null,
    token: null,
    setCurUser: () => {},
    setToken: () => {},
});

export const DataProvider = ({ children }) => {
    const [curUser, setCurUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    useEffect(() => {
        if (token) {
            axiosClient.get("/profile").then(({ data }) => {
                setCurUser(data.data);
                setLoading(false);
            });
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            const interval = setInterval(() => {
                axiosClient.get("/user").then((response) => {
                    setUsers(response.data);

                    setLoading(false);
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [token]);

    return token && loading ? (
        <div>Loading...</div>
    ) : (
        <DataContext.Provider
            value={{ curUser, token, setCurUser, setToken, users }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
