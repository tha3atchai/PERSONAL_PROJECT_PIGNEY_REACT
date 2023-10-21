import React from 'react'
import pigneyLogoPurple from "../assets/SVG/pigneyLogoLemon.svg"

function Loading2() {
  return (
    <>
    <div className=''>
      <div className='absolute'>
        <img src={pigneyLogoPurple} className={"w-[120px] top-[180px] left-[140px] relative animate-ping"} alt='' />
      </div>
    </div>
    </>
  )
}

export default Loading2