import React from 'react'

function ModalInput({type, placeholder, value, onChange, name}) {
  return (
    <>
        <div className="flex flex-col text-white">
            <div className='text-sm pl-4'>{placeholder}</div>
            <input
            className="text-white text-base w-full bg-transparent py-3 px-4 border-2 border-white rounded-full outline-none focus:ring focus:ring-purple-600 focus:border-white/70"
            style={{maxWidth: "400px"}}
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

export default ModalInput