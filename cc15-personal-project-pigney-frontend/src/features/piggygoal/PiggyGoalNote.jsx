import React from 'react'
import PiggyGoalButton from './PiggyGoalButton'
import ProfileAvatar from '../profile/ProfileAvatar'
import PiggyGoalNoteMessage from './PiggyGoalNoteMessage'

function PiggyGoalNote() {

  let data = [
    {id: 1, m: "Hello John"},
    {id: 2, m: "Hello Joe"},
    {id: 3, m: "Hello Jane"},
    {id: 4, m: "Hello Jam"},
    {id: 5, m: "Hello Jimmy"},
  ];

  return (
    <>
        <div className='gap-1 pt-2 flex flex-col items-center justify-center'>
            <div className='flex justify-end px-2 text-lg w-5/6'>Note</div>
            <div className='flex flex-col gap-2 w-5/6 h-24 border-2 rounded-xl p-2 '>
              <div className='flex flex-col pt-[3px] gap-2 w-full overflow-auto scrollbar-thin scrollbar-thumb-white/70 scrollbar-track-pigney-purple/30 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
                {data.map(x => <PiggyGoalNoteMessage key={x.id} message={x.m} />)}
              </div>
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