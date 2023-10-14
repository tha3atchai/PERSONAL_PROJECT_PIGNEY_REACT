import React from 'react'
import pigneyLogoPurple from "../assets/SVG/pigneyLogoPurple.svg"
import RegisterForm from '../features/auth/RegisterForm'
import BglighUp from '../layout/BglighUp'

function RegisterPage() {
  return (
    <>
      <div className='w-full h-full flex text-white'>
        <div className='h-3/4 flex w-2/3 justify-evenly m-auto'>
          <div className='flex flex-col justify-center gap-20 w-96' style={{minWidth: "400px"}}>
            <img className='self-center animate-logo-pulse w-72' src={pigneyLogoPurple} alt="" />
            <div className='text-6xl font-light'>CREATE<br />&ensp;&nbsp;ACCOUNT</div>
          </div>
          <div className='flex items-center'>
            <RegisterForm /> 
          </div>
        </div>
      </div>
      <BglighUp />
    </>
  )
}

export default RegisterPage