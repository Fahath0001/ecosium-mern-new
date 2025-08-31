import React from 'react'
import { assetsHome } from '../assets/MainData'

const PlanWedding = () => {
    return (
        <div
            className="w-full h-auto bg-[linear-gradient(65deg,_#ff5e9b,_#45aaff)] items-center justify-center flex rounded-xl my-[30px]"
        >
            <div
                className='w-full items-stretch justify-between gap-[30px] flex p-[40px]'
            >
                <div className="w-[40%] h-[300px] items-center justify-center flex ">
                    <img
                        src={assetsHome.planeWedding}
                        alt=""
                        className='h-[125%] object-cover rotate-[-20deg] '
                    />

                </div>
                <div className='w-[60%] items-start justify-center flex flex-col gap-[25px]'>
                    <h1 className='text-[56px] font-semibold text-white'>
                        Plan Your Wedding
                    </h1>
                    <p className='w-[90%] text-[18px] text-white font-medium'>
                        Make your special day unforgettable with our all-in-one wedding services. From stunning cakes and stylish decorations to beautiful venues, party foods, and more — we take care of every detail so you can focus on making memories.
                    </p>
                    <button
                        className='py-[10px] px-[40px] bg-primary rounded-lg font-semibold text-[18px] text-white trackng-[1px]'
                    >
                        More
                    </button>

                </div>

            </div>

        </div>
    )
}

export default PlanWedding