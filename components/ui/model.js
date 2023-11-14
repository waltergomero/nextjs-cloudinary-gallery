import React from 'react'

const Modal = ({isVisible, onClose, children}) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    flex justify-center items-center' id='wrapper' onClick={handleClose}>
        <div className='w-[550px] flex flex-col'>
            <div className='relative bg-white p-2 rounded-md'>
            <button className='text-gray-500 text-xl absolute right-1 top-1'
                            onClick={() => onClose()}>X</button>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal