import React from "react";
import LoginInput from "./LoginInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../stores/slices/authSlice";
import {
  getDataGoal,
  getDataGoalRecord,
  getDataRecord,
  getDataRecordUser,
  setInitialLoading,
} from "../../stores/slices/goalSlice";

function LoginForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitInput = e => {
    e.preventDefault();
    dispatch(loginUser(input))
      .unwrap()
      .then(res => {
        dispatch(setInitialLoading(true));
        dispatch(getDataRecord());
        dispatch(getDataGoalRecord());
        dispatch(getDataRecordUser());
        dispatch(getDataGoal()).then(() => {
          navigate(`/profile/${res.user.id}`);
        });
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(setInitialLoading(false));
        }, 1800);
      });
  };

  return (
    <>
      <form onSubmit={onSubmitInput} className="flex w-96 flex-col gap-4">
        <div>
          <LoginInput
            value={input.emailOrMobile}
            onChange={onChangeInput}
            name="emailOrMobile"
            placeholder="Email address or mobile number"
          />
        </div>
        <div>
          <LoginInput
            value={input.password}
            onChange={onChangeInput}
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-pigney-lemon text-black text-lg font-medium rounded-full w-full p-3"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
