import React, { useState } from 'react'
import ModalInput from '../auth/ModalInput'
import axios from '../../config/axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

function CreateAddFundsAndWithWithdrawForm({type, onSuccess}) {
  const {fetchData} = useAuth();
  const {piggygoalsId} = useParams();
  const [input, setInput] = useState({
    fund: "",
    note: "",
  });

  const onChangeInput = e => setInput({...input, [e.target.name]: e.target.value});

  const addFunds = async() => {
    const body = {
      ...input,
      status: "ADD",
      piggygoalsId,
    };
    await axios.post("/piggygoals/add", body);
    onSuccess();
    fetchData();
  };

  const withDraw = async() => {
    const body = {
      ...input,
      status: "WITHDRAW",
      piggygoalsId,
    };
    await axios.post("/piggygoals/withdraw", body);
    onSuccess();
    fetchData();
  };


  return (
    <div className='flex flex-col gap-2 p-2'>
        <ModalInput name={"fund"} value={input.fund} onChange={onChangeInput} placeholder={"Goal Amount"} />
        <ModalInput name={"note"} value={input.note} onChange={onChangeInput} placeholder={"Note"} />
        <div className='py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple'>
            <button onClick={type === "Saving" ? addFunds: withDraw} className='w-full text-center text-xl text-white '>{type}</button>
        </div>
    </div>
  )
}

export default CreateAddFundsAndWithWithdrawForm