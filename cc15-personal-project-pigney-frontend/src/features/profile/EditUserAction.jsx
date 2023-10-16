import React, { useState } from 'react'
import {FaCamera} from "react-icons/fa6"
import Modal from '../../components/Modal';
import EditProfileForm from './EditProfileForm';

function EditUserAction() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className='relative top-[-40px] left-[196px] ' onClick={() => setIsOpen(true)}>
            <FaCamera />
        </div>
        <Modal open={isOpen} title={"Edit Profile"} onClose={() => setIsOpen(false)}>
            <EditProfileForm onSuccess={() => setIsOpen(false)} />
        </Modal>
    </>
  )
}

export default EditUserAction