import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavbarItem from './NavbarItem';

const navs = [
  {id: 1, to: "/", name: "Home"},
  {id: 2, to: "/login", name: "Sign in"},
  {id: 3, to: "/register", name: "Sign up"},
];

function Navbar() {
  const {pathname} = useLocation();
  console.log(pathname);
  return (
    <>
    <nav className='flex gap-6 text-white'>
      {navs.map(x => <NavbarItem key={x.id} to={x.to} active={pathname === x.to} name={x.name} />)}
    </nav>
    </>
  )
}

export default Navbar