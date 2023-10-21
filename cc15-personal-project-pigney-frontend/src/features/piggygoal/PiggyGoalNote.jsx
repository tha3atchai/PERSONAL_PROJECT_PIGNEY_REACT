import React from 'react'
import PiggyGoalButton from './PiggyGoalButton'
import PiggyGoalNoteMessage from './PiggyGoalNoteMessage'
import { useAuth } from '../../hooks/use-auth'
import { useParams } from 'react-router-dom'

function PiggyGoalNote({success}) {
  const {piggygoalsId} = useParams();
  const {dataRecordUser} = useAuth();

  return (
    <>
        <div className='gap-1 pt-2 flex flex-col items-center justify-center'>
            <div className='flex justify-end px-2 text-lg w-5/6'>Note</div>
            <div className='flex flex-col gap-2 w-5/6 h-24 border-2 rounded-xl p-2 '>
              <div className='flex flex-col pt-[3px] gap-2 w-full overflow-auto scrollbar-thin scrollbar-thumb-white/70 scrollbar-track-pigney-purple/30 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
                {dataRecordUser.recordAndUser.sort((a, b) =>b.id - a.id).map(x => x.piggyId === +piggygoalsId ? <PiggyGoalNoteMessage key={x.id} {...x} /> : null)}
              </div>
            </div>
            {success ? (
              <>
                <div className={"hidden"}>
                    <PiggyGoalButton text={"Add Funds"} />
                    <PiggyGoalButton text={"Withdraw"} />
                    <PiggyGoalButton text={"More"} />
                </div>
                <div className='flex items-center text-xl h-[60px]'>COMPLETE</div>
              </>
            ) : (
              <>
                <div className={"flex gap-6 justify-between w-5/6 pt-4"}>
                    <PiggyGoalButton text={"Add Funds"} />
                    <PiggyGoalButton text={"Withdraw"} />
                    <PiggyGoalButton text={"More"} />
                </div>
              </>
            )}
        </div> 
    </>
  )
}

export default PiggyGoalNote