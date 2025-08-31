
import React from 'react'

const SignOut = (setToken) => {
    console.log("Token is " + setToken);

    return (
        <div className='w-[90%] h-[99px] justify-center items-center flex '>
            <button onClick={() => setToken("")} className="bg-gray-100 hover:bg-primary text-black hover:text-white  text-[18px] font-medium px-[30px] py-[5px] rounded-lg border border-black hover:border-transparent">
                Log Out
            </button>
        </div>
    )
}

export default SignOut