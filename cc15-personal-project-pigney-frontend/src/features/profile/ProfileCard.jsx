import React from 'react'
import { useAuth } from '../../hooks/use-auth';
import EditUserAction from './EditUserAction';
import Avatar from '../../components/Avatar';
import ProfileAvatar from './ProfileAvatar';

function ProfileCard({goal, result}) {
  const {dataUser} = useAuth();

  let context = (
    <div className='flex flex-col p-6 w-72 rounded-xl h-full bg-pigney-purple/40'>
      <div>
        <div className='w-60'>
            <Avatar rounded='xl' src={dataUser.user.profileImage} />
            <div className='absolute text-3xl text-pigney-purple/80 cursor-pointer'>
              <EditUserAction />
            </div>
        </div>
      </div>
        <div className='flex flex-col h-full justify-around font-light p-2'>
          <div className='flex flex-col h-full justify-evenly'>
            <div><span className='font-medium'>First Name</span> : {dataUser.user.firstName}</div>
            <div><span className='font-medium'>Last Name</span> : {dataUser.user.lastName}</div>
            <div><span className='font-medium'>Email or Mobile</span> : {dataUser.user.email || dataUser.user.mobile}</div>
          </div>
          <hr className='my-2' />
          <div className='flex flex-col h-full justify-evenly'>
            <div className='font-medium'><span>All Piggy Goals</span> : 20</div>
            <div className='font-medium'><span>All Piggy Goals</span> : 20</div>
            <div className='font-medium'><span>All Piggy Goals</span> : 20</div>
          </div>
        </div>
    </div>
  );

  goal && (context = (
    <div className='flex flex-col p-6 w-72 rounded-xl h-full bg-pigney-purple/40'>
      <div>
        <div className='w-60'>
            <Avatar rounded='xl' src={result.goalImage} />
            <div className='absolute text-3xl text-pigney-purple/80 cursor-pointer'>
              <EditUserAction />
            </div>
        </div>
      </div>
        <div className='flex flex-col h-full justify-around font-light p-2'>
          <div className='flex flex-col h-full justify-evenly'>
            <div><span className='font-medium'>Goal Name</span> : {result.goalName}</div>
            <div><span className='font-medium'>End Date</span> : {result.endDate.split("T")[0]}</div>
            <div className='font-medium'><span>Goal Amount</span> : {result.goalAmount}</div>
            <div className='font-medium'><span>Current Amount</span> : {result.currentAmount}</div>
            <div><span className='font-medium'>Note</span> : {result.note}</div>
          </div>
          <hr className='my-2' />
          <div className='flex flex-col h-full justify-evenly'>
            <div className='font-medium'><span>Status</span> : {result.status}</div>
            <div className='flex gap-2 items-center font-medium'><span>Created By</span> : <ProfileAvatar src={dataUser.user.profileImage} name={dataUser.user.firstName} w={8} /></div>
          </div>
        </div>
    </div>
  ))

  return (
    <>
    {context}
    </>
  )
}

export default ProfileCard