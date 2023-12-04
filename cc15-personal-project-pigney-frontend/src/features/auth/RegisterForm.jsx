import React from "react";
import RegisterInput from "./RegisterInput";
import { useState } from "react";
import Joi from "joi";
import InputErrorMessage from "./InputErrorMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../stores/slices/authSlice";
import {
  getDataGoal,
  getDataGoalRecord,
  getDataRecord,
  getDataRecordUser,
  setInitialLoading,
} from "../../stores/slices/goalSlice";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = input => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const newError = {};
    error.details.map(x => (newError[x.path[0]] = x.message));
    return newError;
  }
};

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const onChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitInput = e => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    dispatch(registerUser(input))
      .unwrap()
      .then(res => {
        dispatch(setInitialLoading(true));
        dispatch(getDataGoalRecord());
        dispatch(getDataRecordUser());
        dispatch(getDataRecord());
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
        <div className="flex gap-4">
          <RegisterInput
            value={input.firstName}
            onChange={onChangeInput}
            name="firstName"
            placeholder="First Name"
            isError={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div className="flex gap-4">
          <RegisterInput
            value={input.lastName}
            onChange={onChangeInput}
            name="lastName"
            placeholder="Last Name"
            isError={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div className="flex gap-4">
          <RegisterInput
            value={input.emailOrMobile}
            onChange={onChangeInput}
            name="emailOrMobile"
            placeholder="Email address or mobile number"
            isError={error.emailOrMobile}
          />
          {error.emailOrMobile && (
            <InputErrorMessage message={error.emailOrMobile} />
          )}
        </div>
        <div className="flex gap-4">
          <RegisterInput
            value={input.password}
            onChange={onChangeInput}
            name="password"
            placeholder="Password"
            type="password"
            isError={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="flex gap-4">
          <RegisterInput
            value={input.confirmPassword}
            onChange={onChangeInput}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            isError={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-pigney-purple text-black text-lg font-medium rounded-full w-full p-3"
          >
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
