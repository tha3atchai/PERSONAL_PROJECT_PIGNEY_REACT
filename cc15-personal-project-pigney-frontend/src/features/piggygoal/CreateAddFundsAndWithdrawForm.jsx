import React from 'react'
import ModalInput from '../auth/ModalInput'

function CreateAddFundsAndWithWithdrawForm({type}) {
  return (
    <div className='flex flex-col gap-2 p-2'>
        <ModalInput placeholder={"Goal Amount"} />
        <ModalInput placeholder={"Note"} />
        <div className='py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple'>
            <button className='w-full text-center text-xl text-white '>{type}</button>
        </div>
    </div>
  )
}

export default CreateAddFundsAndWithWithdrawForm