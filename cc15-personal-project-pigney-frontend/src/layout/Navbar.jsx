import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import localStorageService from "../utils/local-storage";
import { useDispatch, useSelector } from "react-redux";
import { resetDataUser } from "../stores/slices/authSlice";
import {
  resetDataGoal,
  resetDataGoalRecord,
  resetDataRecord,
  resetDataRecordUser,
} from "../stores/slices/goalSlice";

const navs = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/login", name: "Sign in" },
  { id: 3, to: "/register", name: "Sign up" },
];

function Navbar() {
  const dispatch = useDispatch();
  const { dataUser } = useSelector(state => state.auth);
  const { pathname } = useLocation();

  const logout = () => {
    localStorageService.removeToken();
    dispatch(resetDataUser());
    dispatch(resetDataGoal());
    dispatch(resetDataGoalRecord());
    dispatch(resetDataRecord());
    dispatch(resetDataRecordUser());
  };

  return (
    <>
      {dataUser ? (
        <Link className="text-white hover:text-gray-300" onClick={logout}>
          Logout
        </Link>
      ) : (
        <nav className="flex gap-6 text-white">
          {navs.map(x => (
            <NavbarItem
              key={x.id}
              to={x.to}
              active={pathname === x.to}
              name={x.name}
            />
          ))}
        </nav>
      )}
    </>
  );
}

export default Navbar;
