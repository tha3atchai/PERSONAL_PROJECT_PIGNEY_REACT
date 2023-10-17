import React from 'react'

function ModalInputDate({type, placeholder, value, onChange, name}) {
  return (
    <>
        <div className="flex flex-col text-white">
            <div className='text-sm pl-4'>{placeholder}</div>
            <input className='p-[11px] text-white text-base rounded-full bg-pigney-purple/0 border-2 border-white outline-none' name={'endDate'} type="date" onChange={onChange} />
        </div>  
    </>
  )
}

export default ModalInputDate