import React from 'react';

function Navbar({ setToken }) {
    return (
        <div className=" w-[100%] h-[99px] justify-center items-center flex flex-col fixed bg-white top-0 z-100">
            <div className='w-[90%] h-[99px] justify-between items-center flex '>
                <img className="w-[max(85px)]" src="../assets/logo/logo.svg" alt="Logo" />
                <button onClick={() => setToken("")} className="bg-gray-200 text-black text-lg font-semibold px-[30px] py-[10px] rounded-xl border border-black">Log Out</button>
            </div>
            <hr className='w-full  h-[1px] border-0 bg-black' />
        </div>
    );
}

export default Navbar;
