import React from 'react'
import ProfileAvatar from './ProfileAvatar'

function ProfileFriends() {
  let profile = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "John Doe"},
    {id: 3, name: "John Doe"},
    {id: 4, name: "John Doe"},
  ];

  return (
    <>
            <div className='flex flex-col justify-between w-64 h-64 rounded-xl bg-white/70 py-2 px-4 text-black'>
                <div className='text-3xl'>FRIENDS</div>
                  <div className='flex flex-1 gap-2 flex-col justify-start pt-2'>
                    {profile.map(x => <ProfileAvatar key={x.id} name={x.name} w={8} />)}
                  </div>
                <div className='self-end'>view more</div>
            </div>
    </>
  )
}

export default ProfileFriends