import React from 'react'
import BglighUp from '../layout/BglighUp'
import pigneyLogoPurple from "../assets/SVG/pigneyLogoPurple.svg";
import ProfileCard from '../features/profile/ProfileCard';
import ProfileTotalSaving from '../features/profile/ProfileTotalSaving';
import ProfileFriends from '../features/profile/ProfileFriends';
import MyPiggyGoals from '../features/profile/MyPiggyGoals';

function ProfilePage() {
  return (
    <>
      <div className='h-full w-full text-white grid grid-cols-4 pt-2 pb-6'>
        <div className='col-span-1'>
          <ProfileCard />
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col gap-8 h-full justify-around'>
            <ProfileTotalSaving />
            <MyPiggyGoals />
          </div>
        </div>
        <div className='col-span-1'>
          <div className='flex flex-col items-center pt-3 h-full justify-between'>
            <ProfileFriends /> 
            <div className='p-12 w-80 animate-logo-pulse m-auto pt-24'>
              <img src={pigneyLogoPurple} alt="" />
            </div>
          </div> 
        </div>
      </div>
      <BglighUp />
    </>
  )
}

export default ProfilePage