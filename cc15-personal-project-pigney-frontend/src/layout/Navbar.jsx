import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavbarItem from './NavbarItem';
import { useAuth } from '../hooks/use-auth';
import localStorageService from '../utils/local-storage';

const navs = [
  {id: 1, to: "/", name: "Home"},
  {id: 2, to: "/login", name: "Sign in"},
  {id: 3, to: "/register", name: "Sign up"},
];

function Navbar() {
  const {dataUser, setDataUser, setDataGoal, setDataRecord} = useAuth();
  const {pathname} = useLocation();

  const logout = () => {
    localStorageService.removeToken();
    setDataUser(null);
    setDataGoal(null);
    setDataRecord(null);
  };

  return (
    <>
    {dataUser ? (
      <Link className='text-white hover:text-gray-300' onClick={logout}>Logout</Link>
    ): (
    <nav className='flex gap-6 text-white'>
      {navs.map(x => <NavbarItem key={x.id} to={x.to} active={pathname === x.to} name={x.name} />)}
    </nav>
    )}
    </>
  )
}

export default Navbar