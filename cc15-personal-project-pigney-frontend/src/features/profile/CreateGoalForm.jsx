import React from 'react'
import ModalInput from '../auth/ModalInput'
import appleipad from "../../assets/appleipad.jpg";

function CreateGoalForm({text}) {
  return (
    <>
        <div className='p-2'>
            <div className='flex justify-between gap-4'>
                <div className='flex flex-col flex-1 gap-2'>
                    <ModalInput placeholder={"Goal Name"}/> 
                    <ModalInput placeholder={"End Date"} /> 
                </div>
                <div className='border-2 rounded-xl w-[150px] h-[150px]'>
                    <img className='object-cover h-full w-full rounded-xl' src={appleipad} alt="" />        
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-2 pt-2'>
                <ModalInput placeholder={"Goal Amount"} /> 
                <ModalInput placeholder={"Note"} /> 
                <div className='py-3 px-4 mt-4 rounded-full border-2 border-white hover:bg-pigney-purple'>
                    <button className='w-full text-center text-xl text-white'>{text}</button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default CreateGoalForm