import React from 'react'
import ProfileAvatar from '../profile/ProfileAvatar'

function PiggyGoalNoteMessage({message}) {
  return (
    <>
        <div className='flex items-center justify-between w-full text-white'>
            <div className='text-sm'>30/09/2023</div>
            <div className='flex gap-4'>
                <div className='flex items-center bg-white/20 text-sm font-light shadow-md rounded-full px-4'>
                {message}
                </div>
                <ProfileAvatar />
            </div>
        </div>
    </>
  )
}

export default PiggyGoalNoteMessage