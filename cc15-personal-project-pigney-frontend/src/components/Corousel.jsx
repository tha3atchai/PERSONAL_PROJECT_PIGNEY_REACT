import React, { useState } from 'react'
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
  } from "react-icons/bs";

function Corousel({slides}) {
    let [current, setCurrent] = useState(0);

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

      <div className="absolute top-[-12px] h-full w-full justify-between items-center flex text-white/0 hover:text-white px-0 text-5xl duration-500">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
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