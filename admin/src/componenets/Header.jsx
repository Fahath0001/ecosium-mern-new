import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ heading, buttonData, setActive }) => {
    const navigate = useNavigate();

    return (
        <div className="w-[100%] h-[60px] items-center justify-center flex bg-gray-100 border-l-[2px] border-black sticky left-0 top-0 z-[50000]">
            <div className='w-full items-center justify-between flex px-[60px]'>
                <h1 className='text-3xl font-semibold'>
                    {
                        heading
                    }
                </h1>
                <div className="items-center justify-center flex gap-[20px]">
                    {
                        buttonData.length > 0 && (
                            buttonData.map((item, i) => (
                                <div key={i}>
                                    <button
                                        className='bg-primary px-[20px] py-[6px] text-[16px] font-semibold text-white tracking-[1px] rounded-xl'
                                        onClick={() => setActive(item.name)}
                                    >
                                        {item.name}
                                    </button>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header