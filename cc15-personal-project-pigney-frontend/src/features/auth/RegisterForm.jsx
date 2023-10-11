import React from 'react'
import RegisterInput from './RegisterInput'
import { useState } from 'react';

function RegisterForm() {
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        emailOrMobile: "",
        password: "",
        confirmPassword: "",
    });

    const onChangeInput = e => {
        setInput({...input, [e.target.name]: e.target.value});
    };

  return (
    <>
        <form className='flex w-80 flex-col gap-4'>
            <div>
                <RegisterInput
                value={input.firstName}
                onChange={onChangeInput}
                name="firstName"
                placeholder='First Name'
                />
            </div>
            <div>
                <RegisterInput
                value={input.lastName}
                onChange={onChangeInput}
                name="lastName"
                placeholder='Last Name'
                />
            </div>
            <div>
                <RegisterInput 
                value={input.emailOrMobile}
                onChange={onChangeInput}
                name="emailOrMobile"
                placeholder='Email address or mobile number'
                />
            </div>
            <div>
                <RegisterInput 
                value={input.password}
                onChange={onChangeInput}
                name="password"
                placeholder='Password'
                type='password'
                />
            </div>
            <div>
                <RegisterInput 
                value={input.confirmPassword}
                onChange={onChangeInput}
                name="confirmPassword"
                placeholder='Confirm Password'
                type='password'
                />
            </div>
            <div>
                <button className='bg-pigney-purple text-black text-lg font-medium rounded-full w-full p-3'>Sign up</button>
            </div>
        </form> 
    </>
  )
}

export default RegisterForm