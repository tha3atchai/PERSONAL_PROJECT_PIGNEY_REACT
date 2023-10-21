import React from 'react'
import CountUp from "react-countup";

function PiggyGoalSaving({result}) {

    const easingFnEaseOutSine = (t, b, c, d) => {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    };

  return (
    <>
        <div className='flex flex-col gap-2 justify-center items-center pb-2'>
            <div className='text-3xl'>GOAL SAVINGS</div>
            <div className='text-5xl text-pigney-purple font-semibold'>
            $ <CountUp start={0} end={+result.currentAmount} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
            </div>
        </div>
    </>
  )
}

export default PiggyGoalSaving