import React from 'react'
import blankProfile from "../../assets/blank.png";

function ProfileAvatar({name, w=8}) {
  return (
    <>
        <div className='flex gap-2 items-center'>
            <div className={`w-${w} aspect-square rounded-full border border-black`}>
                <img className='rounded-full' src={blankProfile} alt="" />
            </div>
            <div>{name}</div> 
        </div>
    </>
  )
}

export default ProfileAvatar