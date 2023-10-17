import React, { useState } from 'react'
import {FaCamera} from "react-icons/fa6"
import Modal from '../../components/Modal';
import EditProfileForm from './EditProfileForm';
import EditPiggyImageForm from '../piggygoal/EditPiggyImageForm';

function EditUserAction({size, type, setInput, input}) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className='relative top-[-40px] left-[196px] ' onClick={() => setIsOpen(true)}>
            <FaCamera className={`text-${size}`} />
        </div>
        {type === "piggy" ? (
          <Modal open={isOpen} title={"Edit Profile"} onClose={() => setIsOpen(false)}>
              <EditPiggyImageForm setInput={setInput} input={input} onSuccess={() => setIsOpen(false)} />
          </Modal>
        ) : (
          <Modal open={isOpen} title={"Edit Profile"} onClose={() => setIsOpen(false)}>
              <EditProfileForm onSuccess={() => setIsOpen(false)} />
          </Modal>
        )}
    </>
  )
}

export default EditUserAction