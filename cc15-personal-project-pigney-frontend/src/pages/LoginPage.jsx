import React from 'react'
import BglighUp from '../layout/BglighUp'
import pigneyLogoLemon from "../assets/SVG/pigneyLogoLemon.svg"
import LoginForm from '../features/auth/LoginForm'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <>
      <div className='w-full h-full flex text-white'>
      <div className='h-3/4 flex w-2/3 justify-evenly m-auto'>
          <div className='flex flex-col justify-center gap-20 w-96' style={{minWidth: "400px"}}>
            <img className='self-center animate-logo-pulse w-72' src={pigneyLogoLemon} alt="" />
            <div className='text-6xl font-light'>SIGN IN<br />&ensp;&nbsp;ACCOUNT</div>
          </div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <LoginForm /> 
            <div className='flex gap-2'>
              <div>Don't have account?</div>
              <Link className='text-pigney-purple font-semibold' to={"/register"}>sign up</Link>
            </div>
          </div>
        </div>
      </div>
      <BglighUp />
    </>
  )
}

export default LoginPage