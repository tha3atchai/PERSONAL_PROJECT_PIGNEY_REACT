import React from 'react'
import CreateGoalButton from '../features/auth/CreateGoalButton';
import coinFlying01 from "../assets/SVG/coinflying01.svg";
import coinFlying02 from "../assets/SVG/coinflying02.svg";
import BglighUp from '../layout/BglighUp';

function HomePage() {
  return (
    <>
    <div className='h-full w-full'>
      <div className='bg-[url("https://i.ibb.co/Y3d2jmJ/bg-web-piggygoal-homepage-02.png")] w-full h-full bg-center bg-no-repeat bg-contain flex flex-col justify-between pl-20 pb-16'>
        <div style={{width: "95%"}} className='flex gap-12 justify-end pt-12'>
          <div className='w-28 pt-10 animate-coin-flying1'>
            <img src={coinFlying01} alt="" />
          </div>
          <div className='w-24 self-start animate-coin-flying2'>
            <img src={coinFlying02} alt="" />
          </div>
        </div>
        <div className='flex gap-7'>
          <div className='text-white text-6xl font-light'>CREATE<br />&ensp;&nbsp;UNLIMITED<br /><span className='text-pigney-purple font-medium italic'>&ensp;&nbsp;GOALS</span> AND<br />&ensp;&nbsp;START SAVING</div>
          <div className='self-end pb-1'>
            <CreateGoalButton />
          </div>
        </div>
      </div>
    </div>
    <BglighUp />
    </>
  )
}
export default HomePage