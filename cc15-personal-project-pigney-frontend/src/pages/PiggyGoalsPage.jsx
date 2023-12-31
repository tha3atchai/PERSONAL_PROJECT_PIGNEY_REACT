import React, { useEffect } from "react";
import BglighUp from "../layout/BglighUp";
import ProfileFriends from "../features/profile/ProfileFriends";
import ProfileCard from "../features/profile/ProfileCard";
import PiggyGoalNote from "../features/piggygoal/PiggyGoalNote";
import DoughnutChart from "../components/DoughnutChart";
import CountUp from "react-countup";
import PiggyRecord from "../features/piggygoal/PiggyRecord";
import PiggyCountUpFunds from "../features/piggygoal/PiggyCountUpFunds";
import PiggyGoalSaving from "../features/piggygoal/PiggyGoalSaving";
import { useParams } from "react-router-dom";
import Complete from "../components/Complete";
import { useDispatch, useSelector } from "react-redux";
import { updateGoal } from "../stores/slices/goalSlice";

function PiggyGoalsPage() {
  const dispatch = useDispatch();
  const { piggygoalsId } = useParams();
  const { dataUser } = useSelector(state => state.auth);
  const { dataGoal, dataRecord } = useSelector(state => state.goal);

  const easingFnEaseOutSine = (t, b, c, d) => {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  };

  const result = dataGoal?.myGoal.find(x => x.id === +piggygoalsId) || [];

  let currentAmountPercentage = 0;
  if (result) {
    currentAmountPercentage =
      100 * (+result.currentAmount / +result.goalAmount);
  }

  let sum = 0;
  if (dataRecord) {
    dataRecord?.myRecord.map(x =>
      x.piggyId === +piggygoalsId
        ? x.status === "ADD"
          ? (sum += x.fund)
          : (sum -= x.fund)
        : x
    );
  }

  let success = false;
  dataGoal?.myGoal.map(x =>
    x.id === +piggygoalsId && +x.goalAmount === +x.currentAmount
      ? (success = true)
      : x
  );

  useEffect(() => {
    if (result.status !== "COMPLETE") {
      if (success) {
        dispatch(updateGoal(+piggygoalsId));
      }
    }
  }, [dataGoal]);

  return (
    <>
      {success && <Complete />}
      <div className="h-full w-full text-white grid grid-cols-4 pt-2 pb-6">
        <div className="col-span-1">
          <ProfileCard result={result} goal={true} />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col pt-4 h-full justify-around">
            <PiggyGoalSaving result={result} />
            <div className="grid grid-cols-4 w-5/6 m-auto h-full px-8">
              <div className="col-span-1 h-full">
                <PiggyCountUpFunds result={result} />
              </div>
              <div className="col-span-2">
                <div className="absolute">
                  <DoughnutChart
                    ownerAmount={sum}
                    firstName={dataUser?.firstName}
                    {...result}
                    width={72}
                    type={"2"}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-5xl flex flex-col justify-center h-full text-pigney-lemon">
                  <div>
                    <CountUp
                      start={0}
                      end={currentAmountPercentage}
                      duration={3.6}
                      delay={0}
                      easingFn={easingFnEaseOutSine}
                    />
                    %
                  </div>
                </div>
              </div>
            </div>
            <div>
              <PiggyGoalNote success={success} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center pt-3 h-full justify-between">
            <ProfileFriends />
            <PiggyRecord />
          </div>
        </div>
      </div>
      <BglighUp />
    </>
  );
}

export default PiggyGoalsPage;
