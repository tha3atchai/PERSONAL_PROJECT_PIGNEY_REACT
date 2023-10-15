import React from 'react'
import ProfileAvatar from './ProfileAvatar'

function ProfileFriends() {
  let profile = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "John Doe"},
    {id: 3, name: "John Doe"},
    {id: 4, name: "John Doe"},
    {id: 5, name: "John Doe"},
    {id: 6, name: "John Doe"},
    {id: 7, name: "John Doe"},
    {id: 8, name: "John Doe"},
    {id: 9, name: "John Doe"},
    {id: 10, name: "John Doe"},
    {id: 11, name: "John Doe"},
  ];

  return (
    <>
    {profile.length > 10 ? (
      <div className='flex flex-col justify-between w-64 h-64 rounded-xl bg-white/70 py-2 px-4 text-black'>
          <div className='text-3xl'>FRIENDS</div>
            <div className='flex flex-1 gap-2 flex-col justify-start pt-2 overflow-auto scrollbar-thin scrollbar-thumb-black/70 scrollbar-track-white/60 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
              {profile.map(x => <ProfileAvatar key={x.id} name={x.name} w={8} />)}
            </div>
          <div className='self-end pt-4 font-light'>view more</div>
      </div>
    ) : (
      <div className='flex flex-col justify-between w-64 h-64 rounded-xl bg-white/70 py-2 px-4 text-black'>
          <div className='text-3xl'>FRIENDS</div>
            <div className='flex flex-1 gap-2 flex-col justify-start pt-2 overflow-auto scrollbar-thin scrollbar-thumb-black/70 scrollbar-track-white/60 scrollbar-track-rounded-md scrollbar-thumb-rounded-md'>
              {profile.map(x => <ProfileAvatar key={x.id} name={x.name} w={8} />)}
            </div>
      </div>
    )}
    </>
  )
}

export default ProfileFriends