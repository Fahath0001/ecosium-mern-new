import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

function Navbar({ setToken }) {
    return (
        <div className=" w-[300px] h-screen justify-center items-start fixed flex bg-gray-100 top-0 left-0 pt-[50px]">
            <div className="w-full h-auto items-center justify-center flex flex-col">
                <div className="w-[90%] items-center justify-center flex flex-col gap-[20px] bg-white py-[20px] rounded-xl border-[1px]">
                    <img
                        className="w-[max(100px)]"
                        src={assets.logo}
                        alt="Logo"
                    />
                    <h1 className='text-4xl font-bold tracking-[1px] text-primary'>
                        ECOSIUM
                    </h1>
                </div>
                <div className='w-[90%] h-auto items-center justify-center flex flex-col mt-[30px] gap-3'>
                    <NavLink className='sidebar w-full py-2 bg-white flex justify-center items-center rounded-lg' to="/">
                        <p className='text-xl '>Dashbord</p>
                    </NavLink>
                    <NavLink
                        className='sidebar w-full py-2 bg-white flex justify-center items-center rounded-lg'
                        to="/event"
                    >
                        <p className='text-xl '>Event's</p>
                    </NavLink>
                    <NavLink className='sidebar w-full py-2 bg-white flex justify-center items-center rounded-lg'
                        to="/night"
                    >
                        <p className='text-xl '>Night Life</p>
                    </NavLink>
                    <NavLink
                        className='sidebar w-full py-2 bg-white flex justify-center items-center rounded-lg'
                        to="/attrection"
                    >
                        <p className='text-xl '>Attrecton's</p>

                    </NavLink>
                    <div className='w-[90%] h-[99px] justify-center items-center flex '>
                        <button onClick={() => setToken("")} className="bg-gray-100 hover:bg-primary text-black hover:text-white  text-[18px] font-medium px-[30px] py-[5px] rounded-lg border border-black hover:border-transparent">Log Out</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
