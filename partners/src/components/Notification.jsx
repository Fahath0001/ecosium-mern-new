import React from 'react'

const Notification = ({ message, type, onClose }) => {
    return (
        <>
            <div className='w-full h-screen items-center justify-center flex z-[20000] fixed top-0'>
                <div className='min-w-[300px] h-auto items-center justify-center flex flex-col bg-white rounded-2xl gap-3 px-[50px] py-[30px] border-[1px] border-gray-400'>
                    <h1>{message}</h1>
                    <button onClick={onClose} className='bg-primary px-[20px] py-[8px] text-[16px] font-medium text-white tracking-[1px] rounded-xl mt-[10px]'>
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default Notification