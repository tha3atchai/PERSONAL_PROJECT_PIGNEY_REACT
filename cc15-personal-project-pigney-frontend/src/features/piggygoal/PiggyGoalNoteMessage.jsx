import React from 'react'
import ProfileAvatar from '../profile/ProfileAvatar'

function PiggyGoalNoteMessage({note, createdAt, user}) {

  return (
    <>
        <div className='flex items-center justify-between w-full text-white'>
            <div className='text-sm'>{createdAt.split("T")[0]}</div>
            <div className='flex gap-4'>
                <div className='flex items-center bg-white/20 text-sm font-light shadow-md rounded-full px-4'>
                {note}
                </div>
                <ProfileAvatar src={user.profileImage} />
            </div>
        </div>
    </>
  )
}

export default PiggyGoalNoteMessage