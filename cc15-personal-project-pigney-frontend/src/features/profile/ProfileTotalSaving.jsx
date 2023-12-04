import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

function ProfileTotalSaving() {
  const { dataGoal } = useSelector(state => state.goal);

  let sum = 0;
  dataGoal?.myGoal.map(x => (sum += +x.currentAmount));

  const easingFnEaseOutSine = (t, b, c, d) => {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  };

  return (
    <>
      <div className="gap-4 p-2 flex flex-col">
        <div className="text-4xl self-center">TOTAL SAVING</div>
        <div className="flex flex-col items-center justify-center gap-4 w-5/6 h-40 border-2 self-center rounded-xl">
          <div className="text-5xl font-semibold text-pigney-purple">
            ${" "}
            <CountUp
              start={0}
              end={sum}
              duration={3.6}
              delay={0}
              easingFn={easingFnEaseOutSine}
            />
          </div>
          <div className="text-base font-light">
            Your are doing &nbsp;
            <span className="text-pigney-purple text-2xl font-light">
              great
            </span>
            &nbsp; this month with ${sum} saved.
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileTotalSaving;
