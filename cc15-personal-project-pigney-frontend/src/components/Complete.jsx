import React from 'react'
import pigneyLogoPurple from "../assets/SVG/pigneyLogoLemon.svg"
import BglighUp from '../layout/BglighUp'

function Complete() {
  return (
    <>
      <div className='-z-10 flex h-[680px] w-[1720px] items-center justify-center absolute -left-[200px] overflow-clip'>
        <img src={pigneyLogoPurple} className={"opacity-0 animate-complete w-[300px] -top-40 relative"} alt='' />
        <img src={pigneyLogoPurple} className={"opacity-0 animate-complete w-[100px] top-40 relative"} alt='' />
        <img src={pigneyLogoPurple} className={"opacity-0 animate-complete w-[200px] relative"} alt='' />
        <img src={pigneyLogoPurple} className={"opacity-0 animate-complete w-[200px] top-40 relative"} alt='' />
        <img src={pigneyLogoPurple} className={"opacity-0 animate-complete w-[100px] relative"} alt='' />
        <img src={pigneyLogoPurple} className={"opacity-0 animate-complete w-[300px] -top-32 relative"} alt='' />
        <img src={pigneyLogoPurple} className={"opacity-0 animate-complete w-[100px] top-40 relative"} alt='' />
      </div>
    </>
  )
}

export default Complete