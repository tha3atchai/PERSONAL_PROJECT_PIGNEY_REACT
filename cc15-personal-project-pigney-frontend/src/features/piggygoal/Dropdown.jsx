import React from "react";
import PiggyGoalButton from "./PiggyGoalButton";

function DropDown({ isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="w-[366px] h-[60px] absolute bg-white/80 right-[44%] bottom-[80px] rounded-full ">
          <div className="flex gap-5 pt-2 px-2">
            <PiggyGoalButton text={"Edit"} />
            <PiggyGoalButton text={"Delete"} />
          </div>
        </div>
      )}
    </>
  );
}

export default DropDown;
