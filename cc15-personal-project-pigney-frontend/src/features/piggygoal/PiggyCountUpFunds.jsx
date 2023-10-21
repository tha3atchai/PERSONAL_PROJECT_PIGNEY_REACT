import React from 'react'
import CountUp from "react-countup";

function PiggyCountUpFunds({result}) {
    let endday = new Date(result.endDate.split("T")[0]);
    let today = new Date();
    let distance = endday.getTime() - today.getTime();
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let moneyPerDay = (+result.goalAmount - +result.currentAmount) / days;

    const easingFnEaseOutSine = (t, b, c, d) => {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    };

  return (
    <>
        <div className='flex h-full flex-col gap-5 justify-center'>
            <div>
                <div className='text-lg font-light'>Daily</div>
                <div className='text-pigney-purple text-2xl font-semibold'>
                    $ <CountUp start={0} end={moneyPerDay} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
                </div>
            </div>
            <div>
                <div className='text-lg font-light'>Weekly</div>
                <div className='text-pigney-purple text-2xl font-semibold'>
                    $ <CountUp start={0} end={moneyPerDay * 7} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
                </div>
            </div>
            <div>
                <div className='text-lg font-light'>Monthly</div>
                <div className='text-pigney-purple text-2xl font-semibold'>
                    $ <CountUp start={0} end={moneyPerDay * 30} duration={3.6} delay={0} easingFn={easingFnEaseOutSine} />
                </div>
            </div>
        </div>
    </>
  )
}

export default PiggyCountUpFunds