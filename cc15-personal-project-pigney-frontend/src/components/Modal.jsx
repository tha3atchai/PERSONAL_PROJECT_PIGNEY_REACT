import React from 'react'
import {FaXmark} from "react-icons/fa6";

function Modal({children, open, maxWidth = 27, title, onClose}) {
  return (
    <>
          {open && (
        <>
          <div className="fixed inset-0 backdrop-blur-sm z-20"></div>
          <div className="fixed inset-0 z-30">
            <div className="flex justify-center items-center min-h-full p-4">
              <div
                className="rounded-xl w-full bg-pigney-purple/90"
                style={{ maxWidth: `${maxWidth}rem` }}
              >
                <div className="flex justify-between pt-4 px-6 text-xl">
                  <div className="invisible">X</div>
                  <div className="text-white text-2xl">{title}</div>
                  <div
                    className="flex items-center text-white cursor-pointer"
                    onClick={onClose}
                  >
                    <FaXmark />
                  </div>
                </div>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      )} 
    </>
  )
}

export default Modal