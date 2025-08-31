import React from 'react'
import { assets } from '../assets/assets'

export const MenuBar = () => {
    return (
        <>
            <div
                className='w-[450px] h-[80px] bg-gray-100 rounded-xl fixed bottom-[40px] border-[1px] border-black items-center justify-between flex z-[1000]'
            >
                <div className='w-[100px] h-full items-center justify-center flex flex-col'>
                    <img
                        className='h-[50%]'
                        src={assets.whislist}
                        alt=""
                    />
                    <p
                        className='text-[14px]'
                    >
                        Home
                    </p>
                </div>
                <div className='w-[100px] h-auto items-center justify-center flex'>
                    <p>
                        H
                    </p>
                </div>
                <div className='w-[100px] h-full items-center justify-center flex flex-col'>
                    <img
                        className='h-[50%]'
                        src={assets.whislist}
                        alt=""
                    />
                    <p
                        className='text-[14px]'
                    >
                        Wishlist
                    </p>
                </div>
                <div className='w-[100px] h-full items-center justify-center flex flex-col'>
                    <img
                        className='h-[60%]'
                        src={assets.cart}
                        alt=""
                    />
                    <p
                        className='text-[14px]'
                    >
                        Cart
                    </p>
                </div>
                <div className='w-[100px] h-full items-center justify-center flex flex-col'>
                    <img
                        className='h-[60%]'
                        src={assets.login}
                        alt=""
                    />
                    <p
                        className='text-[14px]'
                    >
                        Account
                    </p>
                </div>


            </div>
        </>
    )
}
