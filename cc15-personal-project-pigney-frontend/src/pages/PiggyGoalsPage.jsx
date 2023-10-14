import React from 'react'
import BglighUp from '../layout/BglighUp'
import ProfileFriends from '../features/profile/ProfileFriends'
import ProfileCard from '../features/profile/ProfileCard'
import PiggyGoalNote from '../features/piggygoal/PiggyGoalNote'
import DoughnutChart from '../components/DoughnutChart'
import CountUp from "react-countup";

function PiggyGoalsPage() {

    const easingFnEaseOutSine = (t, b, c, d) => {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    };

  return (
    <>
      <div className='h-full w-full text-white grid grid-cols-4 pt-2 pb-6'>
        <div className='col-span-1'>
          <ProfileCard />
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col pt-4 h-full justify-around'>

            <div className='flex flex-col gap-2 justify-center items-center pb-2'>
                <div className='text-3xl'>GOAL SAVINGS</div>
                <div className='text-5xl text-pigney-purple font-semibold'>
                $ <CountUp start={0} end={432} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
                </div>
            </div>
            <div className='grid grid-cols-4 w-5/6 m-auto h-full px-8'>
                <div className='col-span-1 h-full'>
                    <div className='flex h-full flex-col gap-5 justify-center'>
                        <div>
                            <div className='text-lg font-light'>Daily</div>
                            <div className='text-pigney-purple text-2xl font-semibold'>
                                $ <CountUp start={0} end={15} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
                            </div>
                        </div>
                        <div>
                            <div className='text-lg font-light'>Weekly</div>
                            <div className='text-pigney-purple text-2xl font-semibold'>
                                $ <CountUp start={0} end={100} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
                            </div>
                        </div>
                        <div>
                            <div className='text-lg font-light'>Monthly</div>
                            <div className='text-pigney-purple text-2xl font-semibold'>
                                $ <CountUp start={0} end={500} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='flex h-full justify-center'>
                        <div className='w-48 self-center'>
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='text-5xl flex flex-col justify-center h-full text-pigney-lemon'>
                        <div>
                            <CountUp start={0} end={70} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />%
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <PiggyGoalNote />
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='flex flex-col items-center pt-3 h-full justify-between'>
            <ProfileFriends /> 
          </div> 
        </div>
      </div>
      <BglighUp />
    </>
  )
}

export default PiggyGoalsPage