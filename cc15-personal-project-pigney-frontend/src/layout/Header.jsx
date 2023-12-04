import React from "react";
import CreateGoalButton from "../features/auth/CreateGoalButton";
import PigneyIcon from "./PigneyIcon";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ProfileAvatar from "../features/profile/ProfileAvatar";
import { useSelector } from "react-redux";

function Header() {
  const { dataUser } = useSelector(state => state.auth);

  return (
    <>
      <div className="flex h-20 pt-2 justify-between">
        <div className="flex flex-col justify-center">
          <Link to={"/"}>
            <PigneyIcon />
          </Link>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-6 items-center h-full self-end">
            <div>
              <Navbar />
            </div>
            {dataUser ? (
              <div className="w-12">
                <Link to={`/profile/${dataUser.id}`}>
                  <ProfileAvatar w={10} src={dataUser.profileImage} />
                </Link>
              </div>
            ) : (
              <div>
                <CreateGoalButton type="outline" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
