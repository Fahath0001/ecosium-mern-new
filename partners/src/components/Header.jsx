import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = ({ heading, buttonData, setActive }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full h-[60px] items-center justify-center flex bg-gray-100 border-l-[2px] sticky left-0 top-0 z-[50000] rounded-lg p-[5px]">
                <div className='w-full items-center justify-between flex px-[60px]'>
                    <h1
                        className='text-xl text-black font-bold'
                    >
                        {
                            heading
                        }
                    </h1>
                    <div
                        className='items-center justify-center flex gap-30px'
                    >
                        {
                            buttonData.length > 0 && (
                                buttonData.map((item, i) => (
                                    <div key={i}>
                                        <button
                                            className='bg-gray-200 px-[20px] mr-[10px]  rounded-[0] border-[1px] border-black text-lg hover:bg-primary hover:text-white button-header'
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
        </>
    )
}

export default Header