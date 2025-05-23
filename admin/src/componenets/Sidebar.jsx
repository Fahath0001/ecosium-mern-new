import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <div className='w-[350px] bg-gray-50 flex items-start justify-center fixed border-r-[1px] border-black shadow-[0_4px_10px_rgba(0,0,0,0.3)] '>
        <div className='w-[300px] h-[calc(100vh-100px)] items-end justify-start flex flex-col mt-3 gap-3'>
          <NavLink className='sidebar w-[80%] py-2 bg-red-100 flex justify-between items-center pl-[20px] [border-radius:20px_0_0_20px]' to="/">
            <p className='text-xl '>Dashbord</p>
          </NavLink>
          <NavLink className='sidebar w-[80%] py-2 bg-red-100 flex justify-between items-center pl-[20px] [border-radius:20px_0_0_20px]' to="/add">
            <p className='text-xl '>Add Events</p>
          </NavLink>
          <NavLink className='sidebar w-[80%] py-2 bg-red-100 flex justify-between items-center pl-[20px] [border-radius:20px_0_0_20px]' to="/list">
            <p className='text-xl '>Events</p>
          </NavLink>
          <NavLink className='sidebar w-[80%] py-2 bg-red-100 flex justify-between items-center pl-[20px] [border-radius:20px_0_0_20px]' to="/order">
            <p className='text-xl '>Orders</p>
          </NavLink>

        </div>

      </div>
    </>
  )
}
