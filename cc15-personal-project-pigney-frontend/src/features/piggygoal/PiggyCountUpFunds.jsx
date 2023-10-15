import React from 'react'
import CountUp from "react-countup";

function PiggyCountUpFunds() {

    const easingFnEaseOutSine = (t, b, c, d) => {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    };

  return (
    <>
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
    </>
  )
}

export default PiggyCountUpFunds