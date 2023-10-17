import React, { useRef, useState } from 'react'
import FormButton from './FormButton';

function PictureForm({children, initialSrc, onSave}) {
    const [file, setFile] = useState(null);
    const inputEl = useRef(null);
  return (
    <>
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={e => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex justify-end">
        <div className='flex px-5 gap-2'>
          {file && (
            <>
              <FormButton onClick={() => {
                onSave(file)
              }
              }>Save</FormButton>
              <FormButton
                onClick={() => {
                  inputEl.current.value = '';
                  setFile(null);
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center">
        {children(file ? URL.createObjectURL(file) : initialSrc, () =>
          inputEl.current.click()
        )}
      </div>
    </div> 
    </>
  )
}

export default PictureForm