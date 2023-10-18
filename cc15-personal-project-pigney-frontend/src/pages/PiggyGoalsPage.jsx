import React from 'react'
import BglighUp from '../layout/BglighUp'
import ProfileFriends from '../features/profile/ProfileFriends'
import ProfileCard from '../features/profile/ProfileCard'
import PiggyGoalNote from '../features/piggygoal/PiggyGoalNote'
import DoughnutChart from '../components/DoughnutChart'
import CountUp from "react-countup";
import PiggyRecord from '../features/piggygoal/PiggyRecord'
import PiggyCountUpFunds from '../features/piggygoal/PiggyCountUpFunds'
import PiggyGoalSaving from '../features/piggygoal/PiggyGoalSaving'
import { useParams } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

function PiggyGoalsPage() {
    const {piggygoalsId} = useParams();
    const {dataUser, dataGoal} = useAuth();


    const result = dataGoal.myGoal.find(x => x.id === +piggygoalsId);
    const easingFnEaseOutSine = (t, b, c, d) => {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    };


    let currentAmountPercentage = 100 * ((100/(result.goalAmount - result.currentAmount)));

  return (
    <>
      <div className='h-full w-full text-white grid grid-cols-4 pt-2 pb-6'>
        <div className='col-span-1'>
          <ProfileCard result={result} goal={true} />
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col pt-4 h-full justify-around'>
            <PiggyGoalSaving result={result} />
            <div className='grid grid-cols-4 w-5/6 m-auto h-full px-8'>
                <div className='col-span-1 h-full'>
                    <PiggyCountUpFunds result={result} />
                </div>
                <div className='col-span-2'>
                    <div className='absolute'>
                        <DoughnutChart firstName={dataUser.user.firstName} {...result} width={72} type={"2"} />
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='text-5xl flex flex-col justify-center h-full text-pigney-lemon'>
                        <div>
                            <CountUp start={0} end={currentAmountPercentage} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />%
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
            <PiggyRecord />
          </div> 
        </div>
      </div>
      <BglighUp />
    </>
  )
}

export default PiggyGoalsPage