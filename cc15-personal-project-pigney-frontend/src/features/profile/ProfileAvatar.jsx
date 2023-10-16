import React from 'react'
import Avatar from '../../components/Avatar';

function ProfileAvatar({name, w=8, src}) {
  return (
    <>
        <div className='flex gap-2 items-center'>
            <div className={`w-${w} aspect-square rounded-full border border-black shadow-sm shadow-white`}>
              <Avatar src={src} />
            </div>
            <div>{name}</div> 
        </div>
    </>
  )
}

export default ProfileAvatar