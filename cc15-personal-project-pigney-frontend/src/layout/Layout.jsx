import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className='flex flex-col justify-between h-screen w-10/12 m-auto'>
        <Header /> 
        <Outlet />
        <Footer />
    </div>
    </>
  )
}

export default Layout