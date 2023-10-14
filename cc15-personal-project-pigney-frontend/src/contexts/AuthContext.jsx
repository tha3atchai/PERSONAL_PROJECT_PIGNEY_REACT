import React, { createContext, useEffect, useState } from 'react'
import axios from "../config/axios";
import localStorageService from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const [dataUser, setDataUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(false);

    const fetchData = async() => {
        try {
            setInitialLoading(true);
            const httpResponse = await axios.get("/auth/me");
            setDataUser(httpResponse.data);
        }catch(err) {
            console.log(err);
        }finally {
            setTimeout(() => {
                setInitialLoading(false);
            }, 1800);
        };
    };

    useEffect(() => {
        if(localStorageService.getToken()){
        fetchData();
        } 
        else setInitialLoading(false);
    }, []);

    const register = (body) => {
        return axios.post("/auth/register", body);
    };

    const login = (body) => {
        return axios.post("/auth/login", body);
    };

    return (
        <AuthContext.Provider value={{register, login, dataUser, setDataUser, initialLoading, setInitialLoading, fetchData}}>
            {children}
        </AuthContext.Provider> 
    );
};
