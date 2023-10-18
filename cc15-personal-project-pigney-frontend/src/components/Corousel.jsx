import React, { useState } from 'react'
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
  } from "react-icons/bs";
import PiggyGoal from '../features/profile/PiggyGoal';
import { useAuth } from '../hooks/use-auth';
import { Link } from 'react-router-dom';

function Corousel() {
    const {dataGoal} = useAuth();
    let [current, setCurrent] = useState(0);

    let slides = [];
    if(dataGoal.myGoal.length !== 0){
    slides = dataGoal.myGoal.map(x => [...slides, <PiggyGoal key={x.id} {...x} />]);
    }

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
  
  return (
    <>
       <div className="overflow-hidden h-[185px] relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map(x => {
          return x;
        })}
      </div>

      <div className="absolute top-[-12px] h-full w-full justify-between items-center flex text-white/0 rounded-full hover:text-white hover:backdrop-blur-sm text-5xl duration-500">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <Link to={dataGoal.myGoal.length !== 0 ? `/piggygoals/${slides[current][0].props.id}` : "/"}>
          <div className='text-3xl'>Click Here</div>
        </Link>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-[-16px] py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div> 
    </>
  )
}

export default Corousel