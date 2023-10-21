import React, { useState } from 'react'
import ModalInput from '../auth/ModalInput'
import ModalInputDate from '../auth/ModalInputDate';
import EditUserAction from './EditUserAction';
import Avatar from '../../components/Avatar';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../../config/axios";
import Loading2 from '../../components/Loading2';

function CreateGoalForm({text, edit, onSuccess}) {
    const {piggygoalsId} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {createGoal, setDataGoal, dataGoal, fetchData, setInitialLoading} = useAuth();
    const [input, setInput] = useState({
        goalName: "",
        endDate: "",
        goalAmount: "",
        note: "",
        goalImage: "",
        status: "INPROCESS",
    });

    const onChangeInput = e => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    const onSubmitInput = e => {
        e.preventDefault();
        let formData = new FormData();
        const body = {...input};
        formData.append("goalImage", body.goalImage);
        formData.append("body", JSON.stringify(body));
        setLoading(true);
        createGoal(formData).then(res => {
            setInitialLoading(true);
            setDataGoal({...dataGoal, myGoal: [...dataGoal.myGoal, res.data.goal]});
            navigate(`/piggygoals/${res.data.goal.id}`);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setTimeout(() => {
            setLoading(false);
            setInitialLoading(false);
            }, 1800);
        });
    };

    const editGoal = async() => {
        const body = {
            ...input,
            piggyId: piggygoalsId, 
        };
        await axios.patch("/piggygoals/update", body);
        fetchData();
        onSuccess();
    };

  return (
    <>
    {edit ? (
        <>
            <div className='p-2'>
                <div className='flex justify-between gap-4'>
                    <div className='flex flex-col flex-1 gap-2'>
                        <ModalInput name={"goalName"} onChange={onChangeInput} placeholder={"Goal Name"}/> 
                        <ModalInputDate name={"endDate"} onChange={onChangeInput} placeholder={"End Date"} />
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-2 pt-2'>
                    <ModalInput name={"goalAmount"} onChange={onChangeInput} placeholder={"Goal Amount"} /> 
                    <ModalInput name={"note"} onChange={onChangeInput} placeholder={"Note"} /> 
                    <div className='py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple'>
                        <button onClick={editGoal} type='submit' className='w-full text-center text-xl text-white'>{text}</button>
                    </div>
                </div>
            </div> 
        </>
    ) : (
        <>
        {loading && <Loading2 />}
            <form onSubmit={onSubmitInput} className='p-2'>
                <div className='flex justify-between gap-4'>
                    <div className='flex flex-col flex-1 gap-2'>
                        <ModalInput name={"goalName"} onChange={onChangeInput} placeholder={"Goal Name"}/> 
                        <ModalInputDate name={"endDate"} onChange={onChangeInput} placeholder={"End Date"} />
                    </div>
                    <div className='border-2 rounded-xl w-[150px] h-[150px]'>
                        <div className='absolute'>
                            {/* <img className='object-cover h-[147px] w-[147px] rounded-xl' src={appleipad} alt="" />         */}
                            <Avatar w={"[147px]"} rounded='xl' src={input.goalImage ? URL.createObjectURL(input.goalImage): null} />
                            <div className='text-pigney-purple/80 relative right-[76px] bottom-[-14px]'>
                                <EditUserAction size={"xl"} type={"piggy"} setInput={setInput} input={input}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-2 pt-2'>
                    <ModalInput name={"goalAmount"} onChange={onChangeInput} placeholder={"Goal Amount"} /> 
                    <ModalInput name={"note"} onChange={onChangeInput} placeholder={"Note"} /> 
                    <div className='py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple'>
                        <button type='submit' className='w-full text-center text-xl text-white'>{text}</button>
                    </div>
                </div>
            </form> 
        </>
    )}
    </>
  )
}

export default CreateGoalForm