import React, { useState } from 'react'
import pigneyLogoBlack from "../../assets/SVG/pigneyLogoBlack.svg"
import pigneyLogoWhite from "../../assets/SVG/pigneyLogoWhite.svg"
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import CreateGoalForm from '../profile/CreateGoalForm';

function CreateGoalButton({type}) {
  const [isOpen, setIsOpen] = useState(false);
  const {dataUser} = useAuth();
  const navigate = useNavigate();

  const handleClick = () => dataUser? setIsOpen(true) : navigate("/login");

  let context = (
    <div className='text-black font-medium text-xs'>
        <button onClick={handleClick} className='flex items-center gap-2 rounded-full px-4 py-2 bg-pigney-lemon shadow-pigney-button hover:shadow-pigney-lemon/30 duration-200'>
          <div>
            <div>CREATE PIGGY</div>
            <div className='flex'>GOALS</div>
          </div>
          <div className="w-12">
            <img src={pigneyLogoBlack} alt="" />
          </div>
        </button>
        <Modal title={"CREATE GOALS"} open={isOpen} onClose={() => setIsOpen(false)}>
          <CreateGoalForm onSuc={() => setIsOpen(false)} text={"CREATE PIGGY"}/>
        </Modal>
    </div>
  );

  (type === "outline" && (context = (
  <div className='text-white font-medium text-xs'>
      <button onClick={handleClick} className='flex items-center gap-2 border-2 rounded-full px-4 py-2 shadow-pigney-button shadow-white/0 hover:shadow-white/20 duration-200'>
        <div>
          <div>CREATE PIGGY</div>
          <div className='flex'>GOALS</div>
        </div>
        <div className="w-12">
          <img src={pigneyLogoWhite} alt="" />
        </div>
      </button>
  </div>
  )))

  return (
    <>
    {context}
    </>
  )
}

export default CreateGoalButton