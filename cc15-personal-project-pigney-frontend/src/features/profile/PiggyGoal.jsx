import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import DoughnutChart from '../../components/DoughnutChart'
import appleipad from "../../assets/appleipad.jpg";
import CountUp from "react-countup";
import { useAuth } from '../../hooks/use-auth';

function PiggyGoal({goalImage, goalName, goalAmount, currentAmount, createdAt, endDate}) {
    const {dataUser} = useAuth();
    const easingFnEaseOutSine = (t, b, c, d) => {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    };

    let currentAmountPercentage = 100 * ((100/(goalAmount - currentAmount)));

  return (
    <>
        <div className='flex justify-between items-center  min-w-[580px] h-40 pl-3 pr-2 rounded-full border-2'>
            <div className='border-2 rounded-full w-[132px] h-[132px]'>
                <img className='object-cover h-full w-full rounded-full' src={goalImage} alt="" />        
            </div>
            <div className='flex flex-col justify-around flex-1 h-full'>
                <div className='flex justify-between px-2'>
                    <div>
                        <div className='text-2xl'>{goalName}</div>
                        <div>${goalAmount}</div>
                    </div>
                    <div className='flex -space-x-4'>
                        <ProfileAvatar />
                        <ProfileAvatar />
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className='text-pigney-purple text-xl font-medium'>${currentAmount}</div>
                        <div className='text-pigney-lemon text-base font-light'>+$30</div>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div>
                        <ProfileAvatar src={dataUser.user.profileImage} name={`${dataUser.user.firstName} ${dataUser.user.lastName}`} />
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className='text-xs'>Start: {createdAt.split("T")[0]}</div>
                        <div className='text-xs'>End: {endDate.split("T")[0]}</div>
                    </div>
                </div>
            </div>
            <div className='h-36 relative right-0 bottom-[42px]'>
                <div className='relative left-[48px] top-[96px] text-3xl text-pigney-lemon'>
                    {currentAmount !== 0 ? (
                        <>
                            <CountUp start={100} end={0} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />%
                        </>
                    ) : (
                        <>
                            <CountUp start={0} end={currentAmountPercentage} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />%
                        </>
                    )}
                </div>
                <div className='flex pt-[6px] w-36'>
                    <DoughnutChart currentAmount={currentAmount} goalAmount={goalAmount} userName={dataUser.user.firstName} />
                </div>
            </div>
        </div>
    </>
  )
}

export default PiggyGoal