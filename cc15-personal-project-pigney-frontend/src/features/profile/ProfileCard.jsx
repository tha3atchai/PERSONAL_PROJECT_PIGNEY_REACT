import React from 'react'
import blankProfile from "../../assets/blank.png";

function ProfileCard() {
  return (
    <>
        <div className='flex flex-col p-6 w-72 rounded-xl h-full bg-pigney-purple/40'>
            <div className='w-60'>
                <img className='rounded-xl' src={blankProfile} alt="" />
            </div>
            <div className='flex flex-col h-full justify-around font-light p-2'>
              <div className='flex flex-col h-full justify-evenly'>
                <div><span className='font-medium'>First Name</span> : John</div>
                <div><span className='font-medium'>Last Name</span> : Doe</div>
                <div><span className='font-medium'>Email</span> : a@gmail.com</div>
              </div>
              <hr className='my-2' />
              <div className='flex flex-col h-full justify-evenly'>
                <div className='font-medium'><span>All Piggy Goals</span> : 20</div>
                <div className='font-medium'><span>Inactive Piggy Goals</span> : 5</div>
                <div className='font-medium'><span>Complete Piggy Goals</span> : 15</div>
              </div>
            </div>
        </div>
    </>
  )
}

export default ProfileCard