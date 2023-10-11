import React from 'react'
import BglighUp from '../layout/BglighUp'
import pigneyLogoLemon from "../assets/SVG/pigneyLogoLemon.svg"
import LoginForm from '../features/auth/LoginForm'

function LoginPage() {
  return (
    <>
      <div className='w-full h-full flex text-white'>
      <div className='h-3/4 flex w-2/3 justify-evenly m-auto'>
          <div className='flex flex-col justify-center gap-20 w-96'>
            <img className='self-center animate-logo-pulse w-72' src={pigneyLogoLemon} alt="" />
            <div className='text-6xl font-light'>SIGN IN<br />&ensp;&nbsp;ACCOUNT</div>
          </div>
          <div className='flex items-center'>
            <LoginForm /> 
          </div>
        </div>
      </div>
      <BglighUp />
    </>
  )
}

export default LoginPage