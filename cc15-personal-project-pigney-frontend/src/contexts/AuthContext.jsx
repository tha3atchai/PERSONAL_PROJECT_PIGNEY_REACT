import React, { createContext, useEffect, useState } from 'react'
import axios from "../config/axios";
import localStorageService from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const [dataUser, setDataUser] = useState(null);
    const [dataGoal, setDataGoal] = useState(null);
    const [dataRecord, setDataRecord] = useState(null);
    const [dataGoalRecord, setDataGoalRecord] = useState(null);
    const [dataRecordUser, setDataRecordUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(false);

    const fetchData = async() => {
        try {
            const httpResponse = await axios.get("/auth/me");
            const httpResponseGoal = await axios.get("/piggygoals");
            const httpResponseRecord = await axios.get("/piggygoals/record");
            const httpResponseDataGoalRecord = await axios.get("/piggygoals/piggyrecord");
            const httpResponseDataRecordUser = await axios.get("/piggygoals/recorduser");
            setDataRecord(httpResponseRecord.data);
            setDataGoal(httpResponseGoal.data);
            setDataUser(httpResponse.data);
            setDataGoalRecord(httpResponseDataGoalRecord.data);
            setDataRecordUser(httpResponseDataRecordUser.data);
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

    const register = body => {
        return axios.post("/auth/register", body);
    };

    const login = body => {
        return axios.post("/auth/login", body);
    };

    const updateProfile = body => {
        return axios.patch("/user", body);
    };

    const updateGoalImage = (body, piggyId) => {
        return axios.patch(`/piggygoals/image/${piggyId}`, body);
    };

    const createGoal = body => {
        return axios.post("/piggygoals", body, {headers: {"Content-Type": "multipart/form-data"}});
    };

    return (
        <AuthContext.Provider value={{register, login, dataUser, setDataUser, initialLoading, setInitialLoading, fetchData, updateProfile, dataGoal, createGoal, setDataGoal, dataRecord, setDataRecord, dataGoalRecord, setDataGoalRecord, dataRecordUser, setDataRecordUser, updateGoalImage}}>
            {children}
        </AuthContext.Provider> 
    );
};
