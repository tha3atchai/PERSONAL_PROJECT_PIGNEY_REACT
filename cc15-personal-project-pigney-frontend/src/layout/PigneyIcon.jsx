import React from 'react'
import pigneyLogoPurple from "../assets/SVG/pigneyLogoPurple.svg"

function PigneyIcon() {
  return (
    <>
        <div className='flex items-center gap-2 pr-24 text-pigney-purple'>
            <div className='text-4xl font-extrabold'>PIGNEY</div>  
            <div className='w-12'>
              <img src={pigneyLogoPurple} alt="" />
            </div>  
        </div>
    </>
  )
}

export default PigneyIcon