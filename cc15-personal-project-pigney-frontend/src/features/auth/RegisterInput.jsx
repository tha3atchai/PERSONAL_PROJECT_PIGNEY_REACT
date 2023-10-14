import React from 'react'

function RegisterInput({type="text", placeholder="test", value, onChange, name, isError}) {
  return (
    <>
      <input
      className={`text-white w-full bg-transparent py-3 px-4 border-2 border-white rounded-full outline-none focus:ring ${
      isError? "border-red-500 focus:ring-red-700" 
      : "focus:ring-pigney-purple focus:border-pigney-lemon"
      }`}
      style={{maxWidth: "400px"}}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      />
    </>
  )
}

export default RegisterInput