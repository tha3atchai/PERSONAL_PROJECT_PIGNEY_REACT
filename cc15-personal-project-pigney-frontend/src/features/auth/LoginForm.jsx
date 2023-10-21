import React from 'react'
import LoginInput from './LoginInput'
import { useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import localStorageService from '../../utils/local-storage';

function LoginForm() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        emailOrMobile: "",
        password: "",
    });

    const {login, setDataUser, setDataGoal, setDataRecord, setInitialLoading, setDataGoalRecord, setDataRecordUser} = useAuth();

    const onChangeInput = e => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    const onSubmitInput = e => {
        e.preventDefault();
        login(input).then(res => {
            setInitialLoading(true);
            localStorageService.setToken(res.data.token);
            setDataRecord(res.data);
            setDataGoal(res.data);
            setDataUser(res.data);
            setDataGoalRecord(res.data);
            setDataRecordUser(res.data);
            navigate(`/profile/${res.data.user.id}`);
        }).catch(err => (
           toast.error(err.response?.data.message, {
            style: {
                backgroundColor: "#cff500",
            },
            theme: "light",
           })
        )).finally(() => {
            setTimeout(() => {
            setInitialLoading(false);
            }, 1800);
        });
    };

  return (
    <>
           <form onSubmit={onSubmitInput} className='flex w-96 flex-col gap-4'>
            <div>
                <LoginInput 
                value={input.emailOrMobile}
                onChange={onChangeInput}
                name="emailOrMobile"
                placeholder='Email address or mobile number'
                />
            </div>
            <div>
                <LoginInput 
                value={input.password}
                onChange={onChangeInput}
                name="password"
                placeholder='Password'
                type='password'
                />
            </div>
            <div>
                <button type='submit' className='bg-pigney-lemon text-black text-lg font-medium rounded-full w-full p-3'>Sign in</button>
            </div>
        </form>  
    </>
  )
}

export default LoginForm