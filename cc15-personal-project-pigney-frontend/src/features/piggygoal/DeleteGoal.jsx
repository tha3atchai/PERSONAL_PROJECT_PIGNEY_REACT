import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal } from "../../stores/slices/goalSlice";

function DeleteGoal({ onSuccess }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataUser } = useSelector(state => state.auth);
  const { piggygoalsId } = useParams();

  const handleDeleteGoal = async () => {
    dispatch(deleteGoal(piggygoalsId));
    navigate(`/profile/${dataUser?.id}`);
    onSuccess();
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-2">
        <div className="py-3 px-4 mt-4 rounded-full border-2 bg-pigney-red hover:bg-pigney-red/80">
          <button
            onClick={handleDeleteGoal}
            className="w-full text-center text-xl text-white"
          >
            YES
          </button>
        </div>
        <div className="py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple">
          <button
            onClick={onSuccess}
            className="w-full text-center text-xl text-white "
          >
            NO
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteGoal;
