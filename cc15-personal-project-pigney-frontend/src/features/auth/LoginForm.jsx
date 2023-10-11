import React from 'react'
import LoginInput from './LoginInput'
import { useState } from 'react';

function LoginForm() {
    const [input, setInput] = useState({
        emailOrMobile: "",
        password: "",
    });

    const onChangeInput = e => {
        setInput({...input, [e.target.name]: e.target.value});
    };

  return (
    <>
           <form className='flex w-80 flex-col gap-4'>
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
                <button className='bg-pigney-lemon text-black text-lg font-medium rounded-full w-full p-3'>Sign in</button>
            </div>
        </form>  
    </>
  )
}

export default LoginForm