import React from 'react'

function LoginInput({type, placeholder, value, onChange, name}) {
  return (
    <>
        <div className="flex">
            <input
            className='text-white w-full bg-transparent py-3 px-4 border-2 border-white rounded-full outline-none focus:ring focus:ring-pigney-lemon focus:border-pigney-purple'
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            />
        </div> 
    </>
  )
}

export default LoginInput