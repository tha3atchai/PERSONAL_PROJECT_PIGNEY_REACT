import React from 'react'

function PiggyGoalButton({text}) {
  return (
    <>
        <button className='flex w-full justify-center rounded-full px-4 py-2 bg-pigney-purple shadow-pigney-button shadow-white/0 hover:shadow-pigney-purple/30 duration-200'>
            <div className='text-black'>
                <div className='text-xl font-light'>{text}</div>
            </div>
        </button>
    </>
  )
}

export default PiggyGoalButton