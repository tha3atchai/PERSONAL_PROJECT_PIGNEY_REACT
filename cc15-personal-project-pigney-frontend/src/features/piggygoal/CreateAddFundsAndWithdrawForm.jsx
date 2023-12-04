import React, { useState } from "react";
import ModalInput from "../auth/ModalInput";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFunds, withDraw } from "../../stores/slices/goalSlice";

function CreateAddFundsAndWithWithdrawForm({ type, onSuccess }) {
  const dispatch = useDispatch();
  const { piggygoalsId } = useParams();
  const [input, setInput] = useState({
    fund: "",
    note: "",
  });

  const onChangeInput = e =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleAddFunds = () => {
    const body = {
      ...input,
      status: "ADD",
      piggygoalsId,
    };
    dispatch(addFunds(body));
    onSuccess();
  };

  const handleWithDraw = async () => {
    const body = {
      ...input,
      status: "WITHDRAW",
      piggygoalsId,
    };
    dispatch(withDraw(body));
    onSuccess();
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      <ModalInput
        name={"fund"}
        value={input.fund}
        onChange={onChangeInput}
        placeholder={"Goal Amount"}
      />
      <ModalInput
        name={"note"}
        value={input.note}
        onChange={onChangeInput}
        placeholder={"Note"}
      />
      <div className="py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple">
        <button
          onClick={type === "Saving" ? handleAddFunds : handleWithDraw}
          className="w-full text-center text-xl text-white "
        >
          {type}
        </button>
      </div>
    </div>
  );
}

export default CreateAddFundsAndWithWithdrawForm;
