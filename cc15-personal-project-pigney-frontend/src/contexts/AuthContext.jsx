import React, { createContext, useEffect, useState } from 'react'
import axios from "../config/axios";
import localStorageService from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const [dataUser, setDataUser] = useState(null);
    const [dataGoal, setDataGoal] = useState(null);
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

    const fetchGoal = async() => {
        try {
            const httpResponseGoal = await axios.get("/piggygoals/");
            setDataGoal(httpResponseGoal.data);
        }catch(err) {
            console.log(err);
        };
    };

    useEffect(() => {
        if(localStorageService.getToken()){
        fetchData();
        } 
        else setInitialLoading(false);
    }, []);

    useEffect(() => {
        if(localStorageService.getToken()){
        fetchGoal();
        } 
    }, []);

    const register = body => {
        return axios.post("/auth/register", body);
    };

    const login = body => {
        return axios.post("/auth/login", body);
    };

    const updateProfile = body => {
        return axios.patch("/user", body);
    };

    const createGoal = body => {
        return axios.post("/piggygoals", body, {headers: {"Content-Type": "multipart/form-data"}});
    };

    return (
        <AuthContext.Provider value={{register, login, dataUser, setDataUser, initialLoading, setInitialLoading, fetchData, updateProfile, dataGoal, createGoal}}>
            {children}
        </AuthContext.Provider> 
    );
};
