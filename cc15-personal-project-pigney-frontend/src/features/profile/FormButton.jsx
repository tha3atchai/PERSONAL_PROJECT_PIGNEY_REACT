import React from 'react'

function FormButton({children, onClick}) {
  return (
    <>
    <button
      className="text-white text-xl px-3 py-1.5 border rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
    </>
  )
}

export default FormButton