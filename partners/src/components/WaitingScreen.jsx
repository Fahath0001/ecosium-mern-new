import React from 'react'
import { assets } from '../assets/assets'
import SignOut from './SignOut'

const WaitingScreen = ({ setToken, name }) => {

    return (
        <div
            className='w-full h-[100vh] items-center justify-center flex flex-col gap-5'
        >
            {
                // Ecosium Logo
                // Ecosium Logo
                // Ecosium Logo
            }
            <img
                src={assets.logo}
                className='w-[200px] '
                alt=""
            />
            <h1
                className='text-2xl font-bold'
            >
                {
                    "Hello " + name + ","
                }
            </h1>
            <p
                className='text-lg text-center'
            >
                Thank you for joining with us!
                <br />
                Your documents have been successfully submitted and are now under review.
                <br />
                <br />
                <span
                    className='text-primary font-bold'
                >
                    ⏳ Please wait while we complete the approval process.
                </span>
                <br />
                <br />
                We’ll notify you once your account has been approved.
                <br />
                Thank you for your patience and trust!
            </p>
            <div className='w-[90%] h-[99px] justify-center items-center flex '>
                <button onClick={() => setToken("")} className="bg-gray-100 hover:bg-primary text-black hover:text-white  text-[18px] font-medium px-[30px] py-[5px] rounded-lg border border-black hover:border-transparent">
                    Sign Out
                </button>
            </div>

        </div>
    )
}

export default WaitingScreen