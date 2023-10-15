import React from 'react'
import ProfileAvatar from '../profile/ProfileAvatar'

function PiggyRecordItem() {
  return (
    <>
        <div className='flex flex-col w-full px-2 items-center gap-2 justify-between'>
            <div className='flex items-center px-2 w-60 justify-between'>
                <div>30/09/2023</div>
                <div>
                    <ProfileAvatar />
                </div>
                <div>
                    <div className='text-pigney-lemon'>+$321</div>
                </div>
            </div>
            <hr className='w-full' />
        </div>
    </>
  )
}

export default PiggyRecordItem