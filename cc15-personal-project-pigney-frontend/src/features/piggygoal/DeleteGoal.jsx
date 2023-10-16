import React from 'react'

function DeleteGoal() {
  return (
    <>
       <div className='flex flex-col gap-2 p-2'>
            <div className='py-3 px-4 mt-4 rounded-full border-2 bg-pigney-red hover:bg-pigney-red/80'>
                <button className='w-full text-center text-xl text-white'>YES</button>
            </div>
            <div className='py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple'>
                <button className='w-full text-center text-xl text-white '>NO</button>
            </div>
        </div> 
    </>
  )
}

export default DeleteGoal