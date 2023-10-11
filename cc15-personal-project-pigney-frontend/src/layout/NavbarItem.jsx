import React from 'react'
import { Link } from 'react-router-dom'

function NavbarItem({to, active, name}) {
    console.log(active);
  return (
    <>
        <Link to={to}>
            <div className={`${active ? "text-pigney-lemon": "text-white hover:text-gray-300"}`}>
                {name}
            </div>
        </Link>
    </>
  )
}

export default NavbarItem