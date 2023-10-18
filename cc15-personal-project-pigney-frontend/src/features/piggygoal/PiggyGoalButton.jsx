import React, { useState } from 'react'
import Modal from '../../components/Modal'
import CreateAddFundsAndWithWithdrawForm from './CreateAddFundsAndWithdrawForm';
import DropDown from './DropDown';
import CreateGoalForm from '../profile/CreateGoalForm';
import DeleteGoal from './DeleteGoal';

function PiggyGoalButton({text}) {
  const [isOpen , setIsOpen] = useState(false);

  let modal = null;

  if(text === "Add Funds") {
    modal = (<Modal title={"ADD FUNDS"} open={isOpen} onClose={() => setIsOpen(false)}>
      <CreateAddFundsAndWithWithdrawForm onSuccess={() => setIsOpen(false)} type={"Saving"} />
    </Modal>)
  }

  if(text === "Withdraw") {
    modal = (<Modal title={"WITHDRAW"} open={isOpen} onClose={() => setIsOpen(false)}>
      <CreateAddFundsAndWithWithdrawForm onSuccess={() => setIsOpen(false)} type={"Withdraw"} />
    </Modal>)
  }

  if(text === "More") {
    modal = (<DropDown isOpen={isOpen} setIsOpen={setIsOpen} />);
  }

  if(text === "Delete") {
    modal = (<Modal title={"DELETE"} open={isOpen} onClose={() => setIsOpen(false)}>
      <DeleteGoal />
    </Modal>)
  }

  if(text === "Edit") {
    modal = (<Modal title={"EDIT"} open={isOpen} onClose={() => setIsOpen(false)}>
      <CreateGoalForm text={"EDIT PIGGY"} />
    </Modal>)
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='flex w-full justify-center rounded-full px-4 py-2 bg-pigney-purple shadow-pigney-button shadow-white/0 hover:shadow-pigney-purple/30 duration-200'>
          <div className='text-black'>
              <div className='text-xl font-light'>{text}</div>
          </div>
      </button>
      {isOpen && modal}
    </>
  )
}

export default PiggyGoalButton