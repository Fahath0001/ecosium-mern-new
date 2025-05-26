import React from 'react'

const Notification = ({ message, type, onClose }) => {
    return (
        <>
            <div className='w-full h-screen items-center justify-center flex z-[20000] fixed top-0 bg-[#ffffffbb]'>
                <div className='w-[400px] h-auto items-center justify-center flex flex-col bg-white rounded-2xl gap-3 py-[100px] border-[1px] border-gray-400'>
                    <h1>{message}</h1>
                    <button onClick={onClose} className='bg-primary px-[30px] py-[10px] text-[18px] font-semibold text-white tracking-[1px] rounded-xl'>
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default Notification