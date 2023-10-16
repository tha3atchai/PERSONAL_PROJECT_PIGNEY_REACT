import React from 'react'
import blankProfile from "../../assets/blank.png";
import { useAuth } from '../../hooks/use-auth';
import EditUserAction from './EditUserAction';
import Avatar from '../../components/Avatar';

function ProfileCard() {
  const {dataUser} = useAuth();

  return (
    <>
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
                <div className='font-medium'><span>Inactive Piggy Goals</span> : 5</div>
                <div className='font-medium'><span>Complete Piggy Goals</span> : 15</div>
              </div>
            </div>
        </div>
    </>
  )
}

export default ProfileCard