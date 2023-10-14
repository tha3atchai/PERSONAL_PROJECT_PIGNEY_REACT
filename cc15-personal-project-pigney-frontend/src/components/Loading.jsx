import React from 'react'
import pigneyLogoPurple from "../assets/SVG/pigneyLogoPurple.svg";
import BglighUp from '../layout/BglighUp';

function Loading() {
  return (
    <>
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='flex flex-col h-full w-full items-center justify-center absolute overflow-clip'>
        <img src={pigneyLogoPurple} className={"animate-loading w-[600px] relative top-[150px]"} alt='' />
        <img src={pigneyLogoPurple} className={"w-[500px] relative bottom-[150px]"} alt='' />
      </div>
    </div>
    <BglighUp />
    </>
  )
}

export default Loading