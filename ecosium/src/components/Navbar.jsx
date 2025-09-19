import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const scrollContainer = useRef(null);
    const [active, setActive] = useState(false);


    return (
        <>
            <div className='
            w-full 
            h-auto   
            flex-col
          bg-gray-50   items-center justify-center flex  fixed top-0  z-[1000] '
            >
                <div className='
                 w-[100%] lg:w-[90%] max-w-[1600px] 
                 flex-col  xl:flex-row
                 py-[15px] xxl:py-[10px] 
                 items-center justify-between flex '
                >
                    <NavLink to={'/'} className='w-auto h-auto items-center justify-center flex gap-[10px] xl:gap-5 px-[10px]'>
                        <img className='h-[45px] xxl:h-[50px] ' src={assets.logo} alt="Logo" />
                        <h1 className='text-[20px] xs:text-[24px] sm:text-[30px] lg:text-3xl xxl:text-4xl font-bold '>
                            ECOSIUM
                        </h1>
                    </NavLink>
                    <div
                        onClick={() => setActive(!active)}
                        className='w-auto h-auto items-center justify-center flex p-[10px] xl:gap-[20px] rounded-lg relative'
                    >
                        <img className='h-[20px]  xl:h-[25px]' src={assets.location} alt="" />
                        <div className='w-auto h-auto items-start justify-start '>
                            <h1
                                className='text-[16px]'
                            >
                                Duabi
                            </h1>

                        </div>

                    </div>
                </div>
                <hr className='bg-gray w-full h-[2px]' />
                <div
                    ref={scrollContainer}
                    className='w-full h-auto gap-[5px] xxl:gap-[20px] items-center justify-start flex overflow-x-auto event-category'>

                    <div className='w-auto h-auto p-[4px] py-[10px] items-center justify-center flex flex-col gap-[3px] bg-gray-200 rounded-[5px] flex-grow'>

                        <div className='w-[90%] max-w-[1600px] h-[100%] items-center justify-center flex gap-[10px] xl:gap[30px] px-[10px] xl:px-[30px]'>
                            <NavLink to={'/event'} className='text-[14px] xs:text-[15px] xl:text-[15px] xxxl:text-xl font-medium px-4 py-1 hover:bg-primary hover:text-white hover:rounded-3xl'>
                                Event
                            </NavLink>
                            <NavLink to={'/attraction'} className=' text-[14px] xs:text-[15px] xl:text-[15px] xxxl:text-xl font-medium px-4 py-1 hover:bg-primary hover:text-white hover:rounded-3xl'>
                                Attraction
                            </NavLink>
                            <NavLink className=' text-[14px] xs:text-[15px] xl:text-[15px] xxxl:text-xl font-medium px-4 py-1 hover:bg-primary hover:text-white hover:rounded-3xl'>
                                Wedding
                            </NavLink>
                            <NavLink className='text-[14px] xs:text-[15px] xl:text-[15px] xxxl:text-xl font-medium px-4 py-1 hover:bg-primary hover:text-white hover:rounded-3xl'>
                                Birthday
                            </NavLink>
                        </div>
                    </div>
                </div>
                <hr className='bg-gray w-full h-[2px]' />
            </div>
        </>
    )
}

export default Navbar