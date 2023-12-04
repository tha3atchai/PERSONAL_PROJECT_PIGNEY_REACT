import React from "react";
import CreateGoalButton from "../auth/CreateGoalButton";
import Corousel from "../../components/Corousel";

function MyPiggyGoals() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex gap-6 justify-center items-center">
          <div className="text-4xl">MY PIGGY GOALS</div>
          <CreateGoalButton />
        </div>
        <div className="w-[580px]">
          <Corousel />
        </div>
      </div>
    </>
  );
}

export default MyPiggyGoals;
