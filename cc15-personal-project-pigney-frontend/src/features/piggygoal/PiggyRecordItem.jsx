import React from 'react'
import ProfileAvatar from '../profile/ProfileAvatar'

function PiggyRecordItem({createdAt, fund, status}) {
  return (
    <>
        <div className='flex flex-col w-full px-2 items-center gap-2 justify-between'>
            <div className='grid grid-cols-7 px-2 w-60'>
                <div className='col-span-3'>{createdAt.split("T")[0]}</div>
                <div className='col-span-2'>
                    <div className='flex pl-3 w-full justify-center'>
                        <ProfileAvatar />
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className={`${status === "WITHDRAW"? "text-pigney-red": "text-pigney-lemon"} flex justify-end`}>+${fund}</div>
                </div>
            </div>
            <hr className='w-full' />
        </div>
    </>
  )
}

export default PiggyRecordItem