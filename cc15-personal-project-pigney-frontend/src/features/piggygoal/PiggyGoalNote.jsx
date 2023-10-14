import React from 'react'
import PiggyGoalButton from './PiggyGoalButton'

function PiggyGoalNote() {
  return (
    <>
        <div className='gap-1 pt-2 flex flex-col items-center justify-center'>
            <div className='flex justify-end px-2 text-lg w-5/6'>Note</div>
            <div className='flex flex-col items-center justify-center gap-4 w-5/6 h-24 border-2 self-center rounded-xl'>

            </div>
            <div className='flex gap-6 justify-between w-5/6 pt-4'>
                <PiggyGoalButton text={"Add Funds"} />
                <PiggyGoalButton text={"Withdraw"} />
                <PiggyGoalButton text={"More"} />
            </div>
        </div> 
    </>
  )
}

export default PiggyGoalNote